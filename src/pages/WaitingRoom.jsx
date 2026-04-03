import { useEffect, useMemo, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuthStore, useBattleStore, useUIStore } from '../stores/appStore';
import { battleService } from '../services/battleService';
import { getBattleSessionId } from '../services/battleSession';
import { Mic, Gavel, Users, Copy, Check, Send } from 'lucide-react';
import JitsiBattleStage from '../components/JitsiBattleStage';
import GifPicker from '../components/GifPicker';
import './WaitingRoom.css';

const SLOT_ORDER = ['artistA', 'artistB', 'judge1', 'judge2'];
const COUNTDOWN_THRESHOLDS = [30, 10, 5, 4, 3, 2, 1];
const PARTICIPANT_STALE_MS = 45_000;

function timestampToMs(value) {
  if (!value) return 0;
  if (typeof value.toMillis === 'function') return value.toMillis();
  if (typeof value.seconds === 'number') return value.seconds * 1000;
  return 0;
}

function WaitingRoom() {
  const { roomId } = useParams();
  const navigate = useNavigate();
  const { user, userProfile } = useAuthStore();
  const { userRole, isHost, setParticipants, setCurrentBattle, setBattlePhase, setUserSlot } = useBattleStore();
  const { isGifPickerOpen, toggleGifPicker } = useUIStore();

  const [battle, setBattle] = useState(null);
  const [participants, setLocalParticipants] = useState([]);
  const [chatMessages, setChatMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [copied, setCopied] = useState(false);
  const [cameraOn, setCameraOn] = useState(true);
  const [micOn, setMicOn] = useState(true);
  const [isStarting, setIsStarting] = useState(false);
  const [trackFile, setTrackFile] = useState(null);
  const [isSubmittingTrack, setIsSubmittingTrack] = useState(false);
  const [phaseRemainingMs, setPhaseRemainingMs] = useState(0);
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
  const participantsByUid = useMemo(
    () => new Map(participants.map((participant) => [participant.uid, participant])),
    [participants],
  );

  const artists = useMemo(() => participants.filter((participant) => participant.role === 'artistA' || participant.role === 'artistB'), [participants]);
  const judges = useMemo(() => participants.filter((participant) => participant.role === 'judge1' || participant.role === 'judge2'), [participants]);
  const spectators = useMemo(() => participants.filter((participant) => participant.role === 'spectator'), [participants]);
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
  const canStart = !!(battle?.artistA && battle?.artistB && battle?.judge1 && battle?.judge2);
  const myBattleRole = currentUserParticipant?.role || null;
  const isArtistRole = myBattleRole === 'artistA' || myBattleRole === 'artistB';
  useEffect(() => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  }, [chatMessages, countdownMessages]);

  useEffect(() => {
    if (!roomId) return undefined;

    const unsubscribeBattle = battleService.subscribeToBattle(roomId, (nextBattle) => {
      if (!nextBattle) {
        navigate('/lobby', { replace: true });
        return;
      }

      setBattle(nextBattle);
      setCurrentBattle(nextBattle);
      setBattlePhase(nextBattle.status);

      if (ACTIVE_STATES.includes(nextBattle.status)) {
        battleService.maybeAdvanceBattlePhase(roomId).catch((error) => {
          console.error('Advance phase error:', error);
        });
      }

      if (nextBattle.status !== 'waiting' && nextBattle.status !== 'selection' && nextBattle.status !== 'active' && nextBattle.status !== 'voting' && nextBattle.status !== 'overtime' && nextBattle.status !== 'finished') {
        return;
      }

      if ((nextBattle.status === 'active' || nextBattle.status === 'voting' || nextBattle.status === 'overtime' || nextBattle.status === 'finished') && nextBattle.id) {
        navigate(`/arena/${nextBattle.id}`, { replace: true });
      }
    });

    const unsubscribeParticipants = battleService.subscribeToParticipants(roomId, (nextParticipants) => {
      const dedupedParticipants = Array.from(new Map(nextParticipants.map((participant) => [participant.uid, participant])).values());
      setLocalParticipants(dedupedParticipants);
      setParticipants(dedupedParticipants);
      const mine = dedupedParticipants.find((participant) => participant.uid === user?.uid);
      setUserSlot(mine?.role || null);
    });

    const unsubscribeMessages = battleService.subscribeToMessages(roomId, (nextMessages) => {
      setChatMessages(nextMessages);
    });

    return () => {
      unsubscribeBattle();
      unsubscribeParticipants();
      unsubscribeMessages();
    };
  }, [navigate, roomId, setBattlePhase, setCurrentBattle, setParticipants, setUserSlot, user?.uid]);

  useEffect(() => {
    if (!battle?.id) return;

    battleService.sanitizeRequiredSlots(battle.id).catch((error) => {
      console.error('Failed to sanitize waiting room slots:', error);
    });

    const interval = setInterval(() => {
      battleService.sanitizeRequiredSlots(battle.id).catch((error) => {
        console.error('Failed to sanitize waiting room slots:', error);
      });
    }, 15000);

    return () => clearInterval(interval);
  }, [battle?.id]);

  useEffect(() => {
    if (!roomId || !user?.uid) return undefined;

    battleService.updateParticipantPresence(roomId, user.uid, localSessionId).catch((error) => {
      console.error('Failed to update waiting room presence:', error);
    });

    const interval = setInterval(() => {
      battleService.updateParticipantPresence(roomId, user.uid, localSessionId).catch((error) => {
        console.error('Failed to refresh waiting room presence:', error);
      });
    }, 15000);

    return () => clearInterval(interval);
  }, [localSessionId, roomId, user?.uid]);

  useEffect(() => {
    if (!battle) return undefined;

    const computeRemaining = () => {
      let duration = 0;
      if (battle.status === 'selection') duration = 30_000;
      const startMs = battle.phaseStartTime?.toMillis?.() || Date.now();
      const elapsed = Date.now() - startMs;
      setPhaseRemainingMs(Math.max(duration - elapsed, 0));
    };

    computeRemaining();
    const timer = setInterval(computeRemaining, 1000);
    return () => clearInterval(timer);
  }, [battle]);

  useEffect(() => {
    announcedThresholdsRef.current = new Set();
    setCountdownMessages([]);
  }, [battle?.status, battle?.phaseStartTime]);

  useEffect(() => {
    if (battle?.status !== 'selection') return;
    const secondsRemaining = Math.ceil(phaseRemainingMs / 1000);
    if (!COUNTDOWN_THRESHOLDS.includes(secondsRemaining)) return;
    if (announcedThresholdsRef.current.has(secondsRemaining)) return;

    announcedThresholdsRef.current.add(secondsRemaining);
    setCountdownMessages((prev) => [
      ...prev,
      {
        id: `selection-${secondsRemaining}`,
        system: true,
        username: 'Dreamledge',
        message: secondsRemaining === 30 ? 'Track selection has started. 30 seconds on the clock.' : `${secondsRemaining} seconds remaining in track selection.`,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  }, [battle?.status, phaseRemainingMs]);

  const syncMediaState = async (updates) => {
    if (!user?.uid || !roomId) return;
    await battleService.updateParticipantMediaState(roomId, user.uid, updates);
  };

  const handleToggleMic = async () => {
    const nextMicOn = !micOn;
    setMicOn(nextMicOn);
    await syncMediaState({ isMicOn: nextMicOn });
  };

  const handleToggleCamera = async () => {
    const nextCameraOn = !cameraOn;
    setCameraOn(nextCameraOn);
    await syncMediaState({ isCameraOn: nextCameraOn });
  };

  const handleCopyCode = () => {
    if (!battle?.roomCode) return;
    navigator.clipboard.writeText(battle.roomCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendMessage = async (event) => {
    event.preventDefault();
    if (!newMessage.trim() || !roomId || !user?.uid) return;

    const messageText = newMessage;
    setNewMessage('');

    await battleService.sendMessage(roomId, {
      type: 'chat',
      system: false,
      userId: user.uid,
      username: userProfile?.displayName || user.displayName || 'Anonymous',
      message: messageText,
      isGif: false,
    });
  };

  const handleSendGif = async (gifUrl) => {
    if (!roomId || !user?.uid) return;
    await battleService.sendMessage(roomId, {
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

  const handleStartBattle = async () => {
    if (!canStart || !roomId) return;
    setIsStarting(true);
    try {
      await battleService.maybeAdvanceBattlePhase(roomId);
    } catch (error) {
      console.error('Unable to start battle flow:', error);
    } finally {
      setIsStarting(false);
    }
  };

  const handleTrackSubmit = async () => {
    if (!trackFile || !battle || !isArtistRole) return;

    setIsSubmittingTrack(true);
    try {
      await battleService.uploadTrackFile(battle.id, myBattleRole, trackFile);
      setTrackFile(null);
    } catch (error) {
      console.error('Track upload error:', error);
      alert(error.message || 'Unable to upload track');
    } finally {
      setIsSubmittingTrack(false);
    }
  };

  const handleLeaveRoom = async () => {
    if (user?.uid) {
      await battleService.leaveWaitingRoom(roomId, user.uid);
    }
    navigate('/lobby');
  };

  const scrollToSection = (sectionRef) => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    return undefined;
  }, []);

  const roleLabel = (role) => {
    if (role === 'artistA') return 'artist a';
    if (role === 'artistB') return 'artist b';
    if (role === 'judge1') return 'judge 1';
    if (role === 'judge2') return 'judge 2';
    return 'spectator';
  };

  const displayedMessages = [...chatMessages, ...countdownMessages];

  return (
    <div className="waiting-room">
      <div className="waiting-container">
        <header className="waiting-header">
          <div className="room-code-display">
            <span className="room-label">Room Code</span>
            <div className="room-code-row">
              <span className="room-code">{battle?.roomCode || roomId}</span>
              <button className="copy-btn" onClick={handleCopyCode}>
                {copied ? <Check size={18} /> : <Copy size={18} />}
              </button>
            </div>
          </div>
          <div className="waiting-status">
            <div className="status-item">
              <span className="status-value">{artists.length}/2</span>
              <span className="status-label">Artists</span>
            </div>
            <div className="status-item">
              <span className="status-value">{judges.length}/2</span>
              <span className="status-label">Judges</span>
            </div>
            <div className="status-item">
              <span className="status-value">{spectators.length}</span>
              <span className="status-label">Crowd</span>
            </div>
            <div className="status-item">
              <span className="status-value">{battle?.status || 'waiting'}</span>
              <span className="status-label">Phase</span>
            </div>
          </div>
        </header>

        <div className="waiting-content">
          <section className="video-section waiting-stage-section" ref={stageSectionRef}>
            <div className="battle-room-header">
              <div>
                <h2 className="section-title">Battle Room</h2>
                <p className="battle-room-subtitle">Artists, judges, and crowd all in one live room.</p>
              </div>
            </div>
            {battle?.status === 'selection' && (
              <div className="track-upload-panel">
                <p className="start-hint">Artists upload tracks while the countdown updates in chat.</p>
                {isArtistRole ? (
                  <>
                    <input
                      type="file"
                      accept="audio/mpeg,audio/mp3"
                      className="input"
                      onChange={(event) => setTrackFile(event.target.files?.[0] || null)}
                    />
                    <button
                      className="btn btn-primary track-upload-btn"
                      onClick={handleTrackSubmit}
                      disabled={!trackFile || isSubmittingTrack}
                    >
                      {isSubmittingTrack ? 'Uploading...' : battle?.tracks?.[myBattleRole] ? 'Replace Track' : 'Submit Track'}
                    </button>
                  </>
                ) : (
                  <p className="start-hint">Waiting on artists to upload their tracks.</p>
                )}
                <p className="start-hint">
                  Artist A: {battle?.tracks?.artistA ? 'submitted' : 'pending'} - Artist B: {battle?.tracks?.artistB ? 'submitted' : 'pending'}
                </p>
              </div>
            )}
            <JitsiBattleStage
              roomName={battle.livekitRoomName || battle.id}
              displayName={userProfile?.displayName || user?.displayName || 'Anonymous'}
              avatarUrl={userProfile?.photoURL || user?.photoURL || ''}
              role={currentUserParticipant?.role || userRole || 'spectator'}
              micOn={micOn}
              cameraOn={cameraOn}
              onMicChange={(nextMicOn) => {
                setMicOn(nextMicOn);
                syncMediaState({ isMicOn: nextMicOn });
              }}
              onCameraChange={(nextCameraOn) => {
                setCameraOn(nextCameraOn);
                syncMediaState({ isCameraOn: nextCameraOn });
              }}
              onLeave={handleLeaveRoom}
            />

            <div className="mobile-stage-actions">
              <button type="button" className="btn btn-primary section-jump-btn" onClick={() => scrollToSection(chatSectionRef)}>
                Open Chat
              </button>
            </div>

          </section>

          <aside className="chat-section waiting-chat-section" ref={chatSectionRef}>
            <div className="chat-header">
              <div className="chat-header-text">
                <h3>Room Chat</h3>
                <p>Live reactions and updates from everyone in the room.</p>
              </div>
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

        {isHost && (
          <div className="start-section">
            <button className="btn btn-primary btn-lg start-btn" onClick={handleStartBattle} disabled={!canStart || isStarting}>
              {isStarting ? 'Starting...' : 'Start Battle'}
            </button>
            {!canStart && <p className="start-hint">Battle starts automatically when artistA, artistB, judge1, and judge2 are filled.</p>}
          </div>
        )}
      </div>
    </div>
  );
}

const ACTIVE_STATES = ['selection', 'active', 'voting', 'overtime'];

export default WaitingRoom;
