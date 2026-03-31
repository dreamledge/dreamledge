import { useEffect, useMemo, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuthStore, useBattleStore, useUIStore } from '../stores/appStore';
import { battleService } from '../services/battleService';
import { getBattleSessionId } from '../services/battleSession';
import { connectToLiveKitRoom, disconnectFromLiveKitRoom, getRoomMediaDiagnostics, setLiveKitMediaEnabled } from '../services/livekitService';
import { Mic, Gavel, Users, Send, X, Video, VideoOff, MicOff, Timer, Volume2, Play, Pause, Heart } from 'lucide-react';
import LiveMediaTile from '../components/LiveMediaTile';
import GifPicker from '../components/GifPicker';
import './Arena.css';

const COUNTDOWN_THRESHOLDS = [30, 10, 5, 4, 3, 2, 1];
const SLOT_ORDER = ['artistA', 'artistB', 'judge1', 'judge2'];

function getRoleLabel(slot) {
  if (slot === 'artistA') return 'Artist 1';
  if (slot === 'artistB') return 'Artist 2';
  if (slot === 'judge1') return 'Judge 1';
  if (slot === 'judge2') return 'Judge 2';
  return 'Open';
}

function getRoleIcon(slot) {
  return slot.startsWith('artist') ? <Mic size={14} /> : <Gavel size={14} />;
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
  const [cameraOn, setCameraOn] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(80);
  const [liveKitRoom, setLiveKitRoom] = useState(null);
  const [liveKitError, setLiveKitError] = useState('');
  const [permissionState, setPermissionState] = useState({ camera: 'unknown', microphone: 'unknown' });
  const [mediaDiagnostics, setMediaDiagnostics] = useState({
    isConnected: false,
    participantCount: 0,
    remoteCount: 0,
    localCameraPublished: false,
    localMicPublished: false,
  });
  const [phaseRemainingMs, setPhaseRemainingMs] = useState(0);
  const [submittingVote, setSubmittingVote] = useState(false);
  const [liveParticipants, setLiveParticipants] = useState([]);
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
    [participants]
  );
  const judges = useMemo(
    () => ['judge1', 'judge2'].map((slot) => participants.find((participant) => participant.role === slot)).filter(Boolean),
    [participants]
  );
  const spectators = useMemo(() => participants.filter((participant) => participant.role === 'spectator'), [participants]);
  const participantsBySlot = useMemo(
    () => SLOT_ORDER.map((slot) => participants.find((participant) => participant.role === slot) || null),
    [participants],
  );
  const isSessionOwner = !currentUserParticipant?.sessionId || currentUserParticipant.sessionId === localSessionId;

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

    const unsubscribeMessages = battleService.subscribeToMessages(battleId, (nextMessages) => {
      setChatMessages(nextMessages);
    });

    return () => {
      unsubscribeBattle();
      unsubscribeParticipants();
      unsubscribeMessages();
    };
  }, [battleId, navigate, setBattlePhase, setCurrentBattle, setParticipants, setUserSlot, user?.uid]);

  useEffect(() => {
    if (!battle || !user || liveKitRoom || !isSessionOwner) return undefined;

    let disposed = false;

    connectToLiveKitRoom({
      roomName: battle.livekitRoomName || battle.id,
      identity: user.uid,
      displayName: userProfile?.displayName || user.displayName || 'Anonymous',
      role: currentUserParticipant?.role || userRole || 'spectator',
      onParticipantsChanged: setLiveParticipants,
    })
      .then((room) => {
        if (disposed) {
          disconnectFromLiveKitRoom(room);
          return;
        }
        setLiveKitRoom(room);
        setLiveKitError('');
      })
      .catch((error) => {
        console.error('LiveKit arena connection error:', error);
        setLiveKitError(error.message || 'LiveKit unavailable');
      });

    return () => {
      disposed = true;
    };
  }, [battle, currentUserParticipant?.role, isSessionOwner, liveKitRoom, user, user?.displayName, user?.uid, userProfile?.displayName, userRole]);

  useEffect(() => {
    if (!currentUserParticipant?.sessionId || currentUserParticipant.sessionId === localSessionId) {
      return;
    }

    if (liveKitRoom) {
      disconnectFromLiveKitRoom(liveKitRoom);
      setLiveKitRoom(null);
    }

    navigate('/lobby', { replace: true });
  }, [currentUserParticipant?.sessionId, liveKitRoom, localSessionId, navigate]);

  useEffect(() => {
    let mounted = true;

    const checkPermissions = async () => {
      if (!navigator.permissions?.query) return;

      try {
        const [cameraPermission, microphonePermission] = await Promise.allSettled([
          navigator.permissions.query({ name: 'camera' }),
          navigator.permissions.query({ name: 'microphone' }),
        ]);

        if (!mounted) return;

        setPermissionState({
          camera: cameraPermission.status === 'fulfilled' ? cameraPermission.value.state : 'unknown',
          microphone: microphonePermission.status === 'fulfilled' ? microphonePermission.value.state : 'unknown',
        });
      } catch (error) {
        console.error('Permission query error:', error);
      }
    };

    checkPermissions();
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    if (!liveKitRoom) return;
    setLiveKitMediaEnabled(liveKitRoom, { microphone: micOn, camera: cameraOn }).catch((error) => {
      console.error('Initial arena media sync error:', error);
      setLiveKitError(error.message || 'Could not enable camera/mic');
    });
  }, [liveKitRoom, micOn, cameraOn]);

  useEffect(() => {
    if (!liveKitRoom) {
      setMediaDiagnostics({
        isConnected: false,
        participantCount: 0,
        remoteCount: 0,
        localCameraPublished: false,
        localMicPublished: false,
      });
      return undefined;
    }

    const updateDiagnostics = () => {
      setMediaDiagnostics(getRoomMediaDiagnostics(liveKitRoom));
    };

    updateDiagnostics();
    const interval = setInterval(updateDiagnostics, 1000);
    return () => clearInterval(interval);
  }, [liveKitRoom]);

  useEffect(() => () => {
    if (liveKitRoom) {
      disconnectFromLiveKitRoom(liveKitRoom);
    }
  }, [liveKitRoom]);

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
      if (vote === 'artistA' || vote === 'artistB') {
        counts[vote] += 1;
      }
    });

    Object.values(battle?.crowdVotes || {}).forEach((vote) => {
      if (vote === 'artistA' || vote === 'artistB') {
        counts[vote] += 1;
      }
    });

    return counts;
  }, [battle]);

  const totalVotes = voteCounts.artistA + voteCounts.artistB;
  const currentTurnSlot = battle?.currentTurn;
  const getLiveParticipant = (uid) => liveParticipants.find((participant) => participant.identity === uid);
  const displayedMessages = [...chatMessages, ...countdownMessages];

  const formatTime = (milliseconds) => {
    const totalSeconds = Math.ceil(milliseconds / 1000);
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const scrollToSection = (sectionRef) => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const syncMediaState = async (updates) => {
    if (!user?.uid || !battleId) return;
    await battleService.updateParticipantMediaState(battleId, user.uid, updates);
  };

  const handleToggleMic = async () => {
    const nextMicOn = !micOn;
    setMicOn(nextMicOn);
    try {
      await setLiveKitMediaEnabled(liveKitRoom, { microphone: nextMicOn });
      await syncMediaState({ isMicOn: nextMicOn });
    } catch (error) {
      console.error('Arena mic toggle error:', error);
    }
  };

  const handleToggleCamera = async () => {
    const nextCameraOn = !cameraOn;
    setCameraOn(nextCameraOn);
    try {
      await setLiveKitMediaEnabled(liveKitRoom, { camera: nextCameraOn });
      await syncMediaState({ isCameraOn: nextCameraOn });
    } catch (error) {
      console.error('Arena camera toggle error:', error);
    }
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

  useEffect(() => {
    if (!battleId || !user?.uid) return undefined;

    const handlePageHide = () => {
      if (!isSessionOwner) return;
      battleService.leaveWaitingRoom(battleId, user.uid).catch((error) => {
        console.error('Arena page hide leave error:', error);
      });
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        handlePageHide();
      }
    };

    window.addEventListener('pagehide', handlePageHide);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      window.removeEventListener('pagehide', handlePageHide);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [battleId, isSessionOwner, user?.uid]);

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
          </div>
        </header>

        <div className="arena-content">
          <section className="arena-main arena-stage-section" ref={stageSectionRef}>
            <div className="room-debug-strip">
              <div className="debug-pill"><span>LiveKit</span><strong>{mediaDiagnostics.isConnected ? 'connected' : 'disconnected'}</strong></div>
              <div className="debug-pill"><span>Camera</span><strong>{permissionState.camera}</strong></div>
              <div className="debug-pill"><span>Mic</span><strong>{permissionState.microphone}</strong></div>
              <div className="debug-pill"><span>My Feed</span><strong>{mediaDiagnostics.localCameraPublished ? 'live' : cameraOn ? 'starting' : 'off'}</strong></div>
              <div className="debug-pill"><span>My Mic</span><strong>{mediaDiagnostics.localMicPublished ? 'live' : micOn ? 'starting' : 'off'}</strong></div>
              <div className="debug-pill"><span>In Room</span><strong>{mediaDiagnostics.participantCount}</strong></div>
            </div>
            <div className="video-grid">
              {participantsBySlot.map((participant, index) => {
                const slot = SLOT_ORDER[index];
                const isArtistSlot = slot.startsWith('artist');
                const isActiveSlot = currentTurnSlot === slot;

                return (
                  <div
                    key={slot}
                    className={`arena-tile ${isArtistSlot ? 'artist-tile' : 'judge-tile'} ${isActiveSlot ? 'active' : ''}`}
                  >
                    <LiveMediaTile
                      participant={participant}
                      liveParticipant={participant ? getLiveParticipant(participant.uid) : null}
                      roleBadgeClass={isArtistSlot ? 'badge-artist' : 'badge-judge'}
                      roleLabel={<>{getRoleIcon(slot)} {getRoleLabel(slot)}</>}
                      emptyLabel={`${getRoleLabel(slot)} open`}
                      fallback={isArtistSlot ? <Mic size={32} /> : <Gavel size={32} />}
                      className={isActiveSlot ? 'active' : ''}
                      isLocal={participant?.uid === user?.uid}
                      slotLabel={getRoleLabel(slot)}
                      nameOverride={participant?.displayName || ''}
                      isSpeaking={!!getLiveParticipant(participant?.uid)?.isSpeaking}
                    />

                    {participant && isArtistSlot && (
                      <button
                        type="button"
                        className="vote-artist-btn"
                        onClick={() => handleVote(slot)}
                        disabled={battle.status !== 'voting' || submittingVote}
                      >
                        <div className="video-info">
                          <span className="artist-name">{participant.displayName}</span>
                          <div className="artist-stats">
                            <span className="vote-count">
                              <Heart size={14} />
                              {voteCounts[slot] || 0}
                            </span>
                            {isActiveSlot && isPlaying && <span className="playing-indicator">Playing</span>}
                          </div>
                        </div>
                      </button>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mobile-stage-actions">
              <button type="button" className="btn btn-primary section-jump-btn" onClick={() => scrollToSection(chatSectionRef)}>
                Open Chat
              </button>
            </div>

            <div className="arena-controls">
              <div className="playback-controls">
                <button className={`control-btn large ${isPlaying ? 'active' : ''}`} onClick={() => setIsPlaying((prev) => !prev)}>
                  {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                </button>
                <div className="volume-control">
                  <Volume2 size={18} />
                  <input type="range" min="0" max="100" value={volume} onChange={(event) => setVolume(event.target.value)} className="volume-slider" />
                </div>
              </div>

              <div className="media-controls">
                <button className={`control-btn ${micOn ? 'active' : 'off'}`} onClick={handleToggleMic}>
                  {micOn ? <Mic size={20} /> : <MicOff size={20} />}
                </button>
                <button className={`control-btn ${cameraOn ? 'active' : 'off'}`} onClick={handleToggleCamera}>
                  {cameraOn ? <Video size={20} /> : <VideoOff size={20} />}
                </button>
                <button className="control-btn leave" onClick={() => navigate('/lobby')}>
                  <X size={20} />
                </button>
              </div>
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
              {liveKitError && <p className="start-hint">{liveKitError}</p>}
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
