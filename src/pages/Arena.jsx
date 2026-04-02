import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Users, Send } from 'lucide-react';
import { useAuthStore, useBattleStore, useUIStore } from '../stores/appStore';
import { battleService } from '../services/battleService';
import { getBattleSessionId } from '../services/battleSession';
import { useBattleRoomMedia } from '../hooks/useBattleRoomMedia';
import BattleStage from '../components/BattleStage';
import BattleRoomControls from '../components/BattleRoomControls';
import GifPicker from '../components/GifPicker';
import './Arena.css';

const SLOT_ORDER = ['artistA', 'artistB', 'judge1', 'judge2'];
const COUNTDOWN_THRESHOLDS = [30, 10, 5, 4, 3, 2, 1];
const PARTICIPANT_STALE_MS = 45_000;

function normalizeTurnSlot(turn) {
  if (turn === 'overtimeA') return 'artistA';
  if (turn === 'overtimeB') return 'artistB';
  return turn || null;
}

function canRoleUseMicrophone(role, battle) {
  if (!role || role === 'spectator' || !battle) return false;

  if (battle.status === 'waiting' || battle.status === 'selection') {
    return role === 'artistA' || role === 'artistB' || role === 'judge1' || role === 'judge2';
  }

  if (battle.status === 'active' || battle.status === 'overtime') {
    return normalizeTurnSlot(battle.currentTurn) === role;
  }

  if (battle.status === 'voting') {
    return role === 'judge1' || role === 'judge2';
  }

  return false;
}

function getMicLockedMessage(role, battle) {
  if (!battle) return 'Microphone is unavailable until the live room is ready.';
  if (role === 'judge1' || role === 'judge2') {
    return battle.status === 'voting'
      ? 'Judges can speak during judging.'
      : 'Judges can only use the microphone during the judging phase.';
  }

  if (role === 'artistA' || role === 'artistB') {
    if (battle.status === 'waiting' || battle.status === 'selection') {
      return 'Artists and judges can use the microphone before the match starts.';
    }

    const activeTurn = normalizeTurnSlot(battle.currentTurn);
    if (battle.status === 'active' || battle.status === 'overtime') {
      return activeTurn === role
        ? 'It is your turn to perform.'
        : 'Only the current performer can use the microphone right now.';
    }

    return 'Artists can only use the microphone during their turn.';
  }

  if (battle.status === 'waiting' || battle.status === 'selection') {
    return 'Only artists and judges can use the microphone before the match starts.';
  }

  return 'Microphone is locked for spectators.';
}

function timestampToMs(value) {
  if (!value) return 0;
  if (typeof value.toMillis === 'function') return value.toMillis();
  if (typeof value.seconds === 'number') return value.seconds * 1000;
  return 0;
}

function Arena() {
  const { battleId } = useParams();
  const navigate = useNavigate();
  const { user, userProfile } = useAuthStore();
  const { userRole, setCurrentBattle, setParticipants, setBattlePhase, setUserSlot } = useBattleStore();
  const { isGifPickerOpen, toggleGifPicker } = useUIStore();

  const [battle, setBattle] = useState(null);
  const [participants, setLocalParticipants] = useState([]);
  const [chatMessages, setChatMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [micOn, setMicOn] = useState(true);
  const [cameraOn, setCameraOn] = useState(false);
  const [micPending, setMicPending] = useState(false);
  const [cameraPending, setCameraPending] = useState(false);
  const [mediaFeedback, setMediaFeedback] = useState('');
  const [phaseRemainingMs, setPhaseRemainingMs] = useState(0);
  const [submittingVote, setSubmittingVote] = useState(false);
  const [countdownMessages, setCountdownMessages] = useState([]);
  const chatMessagesRef = useRef(null);
  const stageSectionRef = useRef(null);
  const chatSectionRef = useRef(null);
  const announcedThresholdsRef = useRef(new Set());
  const localSessionId = useMemo(() => getBattleSessionId(), []);

  const currentUserParticipant = useMemo(
    () => participants.find((participant) => participant.uid === user?.uid) || null,
    [participants, user?.uid],
  );

  const artists = useMemo(
    () => ['artistA', 'artistB'].map((slot) => participants.find((participant) => participant.role === slot)).filter(Boolean),
    [participants],
  );
  const judges = useMemo(
    () => ['judge1', 'judge2'].map((slot) => participants.find((participant) => participant.role === slot)).filter(Boolean),
    [participants],
  );
  const spectators = useMemo(() => participants.filter((participant) => participant.role === 'spectator'), [participants]);

  const participantsByUid = useMemo(
    () => new Map(participants.map((participant) => [participant.uid, participant])),
    [participants],
  );

  const participantsBySlot = useMemo(() => {
    const seenUsers = new Set();

    return SLOT_ORDER.map((slot) => {
      const assignedUid = battle?.[slot];
      let participant = assignedUid ? participantsByUid.get(assignedUid) || null : null;

      if (!participant) {
        participant = participants.find((entry) => entry.role === slot) || null;
      }

      if (!participant || seenUsers.has(participant.uid)) {
        return null;
      }

      if (!participant) {
        return null;
      }

      const lastSeenMs = timestampToMs(participant.lastSeenAt || participant.updatedAt || participant.joinedAt);
      if (!lastSeenMs || Date.now() - lastSeenMs > PARTICIPANT_STALE_MS) {
        return null;
      }

      seenUsers.add(participant.uid);
      return participant;
    });
  }, [battle, participants, participantsByUid]);

  const currentUserRole = currentUserParticipant?.role || userRole || 'spectator';
  const isSessionOwner = !currentUserParticipant?.sessionId || currentUserParticipant.sessionId === localSessionId;
  const canUseMediaControls = ['artistA', 'artistB', 'judge1', 'judge2'].includes(currentUserRole);
  const canSpeakNow = canRoleUseMicrophone(currentUserRole, battle);
  const liveRoomName = battle?.livekitRoomName || battle?.id || '';
  const {
    participants: liveParticipants,
    status: connectionStatus,
    error: roomError,
    diagnostics,
    toggleMicrophone,
    toggleCamera,
  } = useBattleRoomMedia({
    roomName: liveRoomName,
    identity: user?.uid || '',
    displayName: userProfile?.displayName || user?.displayName || 'Anonymous',
    role: currentUserRole,
    battleId: battleId,
    cameraOn,
    micOn,
    enabled: !!battle && !!user && isSessionOwner,
  });

  useEffect(() => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  }, [chatMessages, countdownMessages]);

  useEffect(() => {
    if (!battleId) return undefined;

    const unsubscribeBattle = battleService.subscribeToBattle(battleId, async (nextBattle) => {
      if (!nextBattle) {
        navigate('/lobby', { replace: true });
        return;
      }

      setBattle(nextBattle);
      setCurrentBattle(nextBattle);
      setBattlePhase(nextBattle.status);
      await battleService.maybeAdvanceBattlePhase(nextBattle.id);
    });

    const unsubscribeParticipants = battleService.subscribeToParticipants(battleId, (nextParticipants) => {
      const dedupedParticipants = Array.from(new Map(nextParticipants.map((participant) => [participant.uid, participant])).values());
      setLocalParticipants(dedupedParticipants);
      setParticipants(dedupedParticipants);
      const mine = dedupedParticipants.find((participant) => participant.uid === user?.uid);
      setUserSlot(mine?.role || null);
    });

    const unsubscribeMessages = battleService.subscribeToMessages(battleId, setChatMessages);

    return () => {
      unsubscribeBattle();
      unsubscribeParticipants();
      unsubscribeMessages();
    };
  }, [battleId, navigate, setBattlePhase, setCurrentBattle, setParticipants, setUserSlot, user?.uid]);

  useEffect(() => {
    if (!battle?.id) return;

    const assigned = SLOT_ORDER.map((slot) => battle[slot]).filter(Boolean);
    if (new Set(assigned).size === assigned.length) return;

    battleService.sanitizeRequiredSlots(battle.id, battle).catch((error) => {
      console.error('Failed to sanitize arena slots:', error);
    });
  }, [battle]);

  useEffect(() => {
    if (!battleId || !user?.uid || !isSessionOwner) return undefined;

    battleService.updateParticipantPresence(battleId, user.uid, localSessionId).catch((error) => {
      console.error('Failed to update arena presence:', error);
    });

    const interval = setInterval(() => {
      battleService.updateParticipantPresence(battleId, user.uid, localSessionId).catch((error) => {
        console.error('Failed to refresh arena presence:', error);
      });
    }, 15000);

    return () => clearInterval(interval);
  }, [battleId, isSessionOwner, localSessionId, user?.uid]);

  useEffect(() => {
    if (!currentUserParticipant?.sessionId || currentUserParticipant.sessionId === localSessionId) {
      return;
    }

    navigate('/lobby', { replace: true });
  }, [currentUserParticipant?.sessionId, localSessionId, navigate]);

  useEffect(() => {
    if (!battle) return undefined;

    const computeRemaining = () => {
      const startMs = battle.phaseStartTime?.toMillis?.() || Date.now();
      const elapsed = Date.now() - startMs;
      let duration = 0;

      if (battle.status === 'selection') duration = 30_000;
      if (battle.status === 'voting') duration = 30_000;
      if (battle.status === 'active') {
        duration = battle.currentTurn === 'artistA' ? battle.timers?.artistA || 180_000 : battle.timers?.artistB || 180_000;
      }
      if (battle.status === 'overtime') {
        duration = battle.currentTurn === 'overtimeA' ? battle.overtimeTimers?.artistA || 60_000 : battle.overtimeTimers?.artistB || 60_000;
      }

      setPhaseRemainingMs(Math.max(duration - elapsed, 0));
    };

    computeRemaining();
    const timer = setInterval(computeRemaining, 1000);
    return () => clearInterval(timer);
  }, [battle]);

  useEffect(() => {
    announcedThresholdsRef.current = new Set();
    setCountdownMessages([]);
  }, [battle?.status, battle?.phaseStartTime, battle?.currentTurn]);

  useEffect(() => {
    if (!battle || !['active', 'voting', 'overtime'].includes(battle.status)) return;
    const secondsRemaining = Math.ceil(phaseRemainingMs / 1000);
    if (!COUNTDOWN_THRESHOLDS.includes(secondsRemaining)) return;
    if (announcedThresholdsRef.current.has(secondsRemaining)) return;

    announcedThresholdsRef.current.add(secondsRemaining);

    const phaseLabel = battle.status === 'voting'
      ? 'crowd voting'
      : battle.status === 'overtime'
        ? 'overtime round'
        : `${battle.currentTurn || 'battle'} turn`;

    setCountdownMessages((prev) => [
      ...prev,
      {
        id: `${battle.status}-${battle.currentTurn || 'phase'}-${secondsRemaining}`,
        system: true,
        username: 'Dreamledge',
        message: secondsRemaining === 30 ? `${phaseLabel} has 30 seconds remaining.` : `${secondsRemaining} seconds left in ${phaseLabel}.`,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  }, [battle, phaseRemainingMs]);

  const voteCounts = useMemo(() => {
    const counts = { artistA: 0, artistB: 0 };
    Object.values(battle?.votes || {}).forEach((vote) => {
      if (vote === 'artistA' || vote === 'artistB') counts[vote] += 1;
    });
    Object.values(battle?.crowdVotes || {}).forEach((vote) => {
      if (vote === 'artistA' || vote === 'artistB') counts[vote] += 1;
    });
    return counts;
  }, [battle]);

  const totalVotes = voteCounts.artistA + voteCounts.artistB;
  const currentTurnSlot = normalizeTurnSlot(battle?.currentTurn);
  const displayedMessages = [...chatMessages, ...countdownMessages];

  const scrollToSection = (sectionRef) => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const syncMediaState = async (updates) => {
    if (!user?.uid || !battleId) return;
    await battleService.updateParticipantMediaState(battleId, user.uid, updates);
  };

  const handleToggleMic = async () => {
    if (!canUseMediaControls) return;
    if (!canSpeakNow && !micOn) {
      setMediaFeedback(getMicLockedMessage(currentUserRole, battle));
      return;
    }
    if (connectionStatus !== 'connected') {
      setMediaFeedback('Live room is still connecting. Please wait a moment.');
      return;
    }
    if (micPending) return;
    const nextMicOn = !micOn;
    setMicPending(true);
    setMediaFeedback(nextMicOn ? 'Turning microphone on...' : 'Turning microphone off...');
    setMicOn(nextMicOn);
    try {
      await toggleMicrophone(nextMicOn);
      await syncMediaState({ isMicOn: nextMicOn });
      setMediaFeedback(nextMicOn ? 'Microphone is live.' : 'Microphone is off.');
    } catch (error) {
      console.error('Arena mic toggle error:', error);
      setMicOn((prev) => !prev);
      setMediaFeedback(error.message || 'Microphone could not be updated.');
    } finally {
      setMicPending(false);
    }
  };

  useEffect(() => {
    if (!micOn || canSpeakNow || !canUseMediaControls) return;

    let cancelled = false;

    const forceMute = async () => {
      setMicOn(false);
      setMicPending(true);
      setMediaFeedback(getMicLockedMessage(currentUserRole, battle));

      try {
        if (connectionStatus === 'connected') {
          await toggleMicrophone(false);
        }
        await syncMediaState({ isMicOn: false });
      } catch (error) {
        if (!cancelled) {
          console.error('Arena forced mute error:', error);
          setMediaFeedback(error.message || getMicLockedMessage(currentUserRole, battle));
        }
      } finally {
        if (!cancelled) {
          setMicPending(false);
        }
      }
    };

    forceMute();

    return () => {
      cancelled = true;
    };
  }, [battle, canSpeakNow, canUseMediaControls, connectionStatus, currentUserRole, micOn, toggleMicrophone]);

  const handleToggleCamera = async () => {
    if (!canUseMediaControls) return;
    if (connectionStatus !== 'connected') {
      setMediaFeedback('Live room is still connecting. Please wait a moment.');
      return;
    }
    if (cameraPending) return;
    const nextCameraOn = !cameraOn;
    setCameraPending(true);
    setMediaFeedback(nextCameraOn ? 'Turning camera on...' : 'Turning camera off...');
    setCameraOn(nextCameraOn);
    try {
      await toggleCamera(nextCameraOn);
      await syncMediaState({ isCameraOn: nextCameraOn });
      setMediaFeedback(nextCameraOn ? 'Camera is live.' : 'Camera is off.');
    } catch (error) {
      console.error('Arena camera toggle error:', error);
      setCameraOn((prev) => !prev);
      setMediaFeedback(error.message || 'Camera could not be updated.');
    } finally {
      setCameraPending(false);
    }
  };

  useEffect(() => {
    if (!diagnostics.isConnected) return;

    if (cameraOn && diagnostics.localCameraPublished) {
      setMediaFeedback('Camera is live.');
      setCameraPending(false);
    }

    if (micOn && diagnostics.localMicPublished) {
      setMediaFeedback(cameraOn && diagnostics.localCameraPublished ? 'Camera and microphone are live.' : 'Microphone is live.');
      setMicPending(false);
    }
  }, [cameraOn, diagnostics.isConnected, diagnostics.localCameraPublished, diagnostics.localMicPublished, micOn]);

  useEffect(() => {
    if (roomError) {
      setMediaFeedback(roomError);
      setMicPending(false);
      setCameraPending(false);
    }
  }, [roomError]);

  const handleLeaveRoom = async () => {
    if (user?.uid && battleId) {
      await battleService.leaveWaitingRoom(battleId, user.uid);
    }
    navigate('/lobby');
  };

  const handleSendMessage = async (event) => {
    event.preventDefault();
    if (!newMessage.trim() || !battleId || !user?.uid) return;

    const messageText = newMessage;
    setNewMessage('');
    await battleService.sendMessage(battleId, {
      type: 'chat',
      system: false,
      userId: user.uid,
      username: userProfile?.displayName || user.displayName || 'Anonymous',
      message: messageText,
      isGif: false,
    });
  };

  const handleSendGif = async (gifUrl) => {
    if (!battleId || !user?.uid) return;
    await battleService.sendMessage(battleId, {
      type: 'chat',
      system: false,
      userId: user.uid,
      username: userProfile?.displayName || user.displayName || 'Anonymous',
      message: '',
      isGif: true,
      gifUrl,
    });
    setNewMessage('');
  };

  const handleVote = async (targetId) => {
    if (!battleId || !user?.uid || battle?.status !== 'voting' || submittingVote) return;

    setSubmittingVote(true);
    try {
      await battleService.castVote(
        battleId,
        user.uid,
        userProfile?.displayName || user.displayName || 'Anonymous',
        currentUserParticipant?.role || userRole || 'spectator',
        targetId,
      );
    } catch (error) {
      console.error('Vote error:', error);
      alert(error.message || 'Unable to submit vote');
    } finally {
      setSubmittingVote(false);
    }
  };

  if (!battle) {
    return (
      <div className="arena">
        <div className="arena-container">
          <div className="card">Loading battle...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="arena">
      <div className="arena-container">
        <header className="arena-header">
          <div className="battle-info">
            <span className="battle-phase">{battle.status}</span>
            <span className="battle-divider">•</span>
            <span className="battle-round">{battle.currentTurn || 'awaiting turn'}</span>
            <span className="viewer-count inline-viewers">
              <Users size={14} />
              {diagnostics.participantCount || artists.length + judges.length + spectators.length} in room
            </span>
          </div>
        </header>

        <div className="arena-content">
          <section className="arena-main arena-stage-section" ref={stageSectionRef}>
            <BattleStage
              participantsBySlot={participantsBySlot}
              liveParticipants={liveParticipants}
              currentTurnSlot={currentTurnSlot}
              currentUserId={user?.uid}
            />

            {canUseMediaControls && (
              <BattleRoomControls
                micOn={micOn}
                cameraOn={cameraOn}
                onToggleMic={handleToggleMic}
                onToggleCamera={handleToggleCamera}
                onLeave={handleLeaveRoom}
                connectionStatus={connectionStatus}
                micPending={micPending}
                cameraPending={cameraPending}
              />
            )}

            {(mediaFeedback || roomError) && <p className="start-hint">{roomError || mediaFeedback}</p>}

            <div className="mobile-stage-actions">
              <button type="button" className="btn btn-primary section-jump-btn" onClick={() => scrollToSection(chatSectionRef)}>
                Open Chat
              </button>
            </div>

            <div className="vote-bar">
              <div className="vote-track">
                <div className="vote-progress" style={{ width: `${((voteCounts.artistA || 0) / Math.max(totalVotes, 1)) * 100}%` }}></div>
              </div>
              <div className="vote-labels">
                <span>{artists.find((artist) => artist.role === 'artistA')?.displayName || 'Artist A'}</span>
                <span className="vs">VS</span>
                <span>{artists.find((artist) => artist.role === 'artistB')?.displayName || 'Artist B'}</span>
              </div>
            </div>
          </section>

          <aside className="chat-section arena-chat arena-chat-section" ref={chatSectionRef}>
            <div className="chat-header">
              <h3>Live Crowd</h3>
              <span className="viewer-count">
                <Users size={14} />
                {artists.length + judges.length + spectators.length} in room
              </span>
              <button type="button" className="btn btn-primary section-jump-btn back-to-stage-btn" onClick={() => scrollToSection(stageSectionRef)}>
                Back To Battle
              </button>
            </div>

            <div className="chat-messages" ref={chatMessagesRef}>
              {displayedMessages.map((msg) => (
                <div key={msg.id} className={`chat-message ${msg.system ? 'system' : msg.userId === user?.uid ? 'own' : ''} ${msg.isGif ? 'gif-message' : ''}`}>
                  <div className="message-header">
                    <span className="message-username">{msg.username}</span>
                    <span className="message-time">{msg.time}</span>
                  </div>
                  {msg.isGif ? <img src={msg.gifUrl} alt="GIF" className="message-gif" /> : <p className="message-content">{msg.message}</p>}
                </div>
              ))}
            </div>

            <form className="chat-input-form" onSubmit={handleSendMessage}>
              <button type="button" className="gif-toggle" onClick={toggleGifPicker}>
                GIF
              </button>
              <input
                type="text"
                className="input chat-input"
                placeholder="Say something..."
                value={newMessage}
                onChange={(event) => setNewMessage(event.target.value)}
              />
              <button type="submit" className="send-btn" disabled={!newMessage.trim()}>
                <Send size={18} />
              </button>
            </form>

            {isGifPickerOpen && <GifPicker onSelect={handleSendGif} onClose={toggleGifPicker} />}
          </aside>
        </div>
      </div>
    </div>
  );
}

export default Arena;
