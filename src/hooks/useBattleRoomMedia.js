import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  connectToLiveKitRoom,
  disconnectFromLiveKitRoom,
  ensureLiveKitAudioPlayback,
  getRoomMediaDiagnostics,
  setLiveKitMediaEnabled,
} from '../services/livekitService';

function defaultDiagnostics() {
  return {
    isConnected: false,
    participantCount: 0,
    remoteCount: 0,
    localCameraPublished: false,
    localMicPublished: false,
    audioReady: false,
  };
}

export function useBattleRoomMedia({ roomName, identity, displayName, role, battleId, cameraOn, micOn, enabled = true }) {
  const [room, setRoom] = useState(null);
  const [participants, setParticipants] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  const [diagnostics, setDiagnostics] = useState(defaultDiagnostics);
  const roomRef = useRef(null);

  const syncDiagnostics = useCallback((roomInstance = roomRef.current) => {
    setDiagnostics(getRoomMediaDiagnostics(roomInstance));
  }, []);

  useEffect(() => {
    if (!enabled || !battleId || !roomName || !identity) {
      if (roomRef.current) {
        disconnectFromLiveKitRoom(roomRef.current);
        roomRef.current = null;
      }
      setRoom(null);
      setParticipants([]);
      setStatus('idle');
      setError('');
      setDiagnostics(defaultDiagnostics());
      return undefined;
    }

    let disposed = false;
    let connectedRoom = roomRef.current;

    setStatus('connecting');
    setError('');

    connectToLiveKitRoom({
      roomName,
      identity,
      displayName,
      role,
      onParticipantsChanged: (nextParticipants) => {
        if (disposed) return;
        setParticipants(nextParticipants);
      },
      onConnectionStateChanged: (nextState, roomInstance) => {
        if (disposed) return;

        connectedRoom = roomInstance || connectedRoom;
        roomRef.current = connectedRoom;

        if (nextState === 'connected') setStatus('connected');
        else if (nextState === 'reconnecting') setStatus('reconnecting');
        else if (nextState === 'disconnected') setStatus('disconnected');

        syncDiagnostics(roomInstance || connectedRoom);
      },
    })
      .then(async (nextRoom) => {
        if (disposed) {
          disconnectFromLiveKitRoom(nextRoom);
          return;
        }

        connectedRoom = nextRoom;
        roomRef.current = nextRoom;
        setRoom(nextRoom);
        setStatus('connected');
        syncDiagnostics(nextRoom);
      })
      .catch((connectError) => {
        if (disposed) return;
        console.error('Battle room media connection error:', connectError);
        setError(connectError.message || 'Unable to connect to the live room.');
        setStatus('failed');
      });

    return () => {
      disposed = true;
      if (connectedRoom) {
        disconnectFromLiveKitRoom(connectedRoom);
      }
      roomRef.current = null;
      setRoom(null);
      setParticipants([]);
      setStatus('idle');
      setError('');
      setDiagnostics(defaultDiagnostics());
    };
  }, [battleId, displayName, enabled, identity, role, roomName, syncDiagnostics]);

  useEffect(() => {
    if (!room) return undefined;

    let cancelled = false;

    const syncMedia = async () => {
      try {
        const audioState = await ensureLiveKitAudioPlayback(room);
        await setLiveKitMediaEnabled(room, { microphone: micOn, camera: cameraOn });
        if (!cancelled) {
          setError('');
          if (!audioState.started && audioState.reason && room.canPlaybackAudio === false) {
            console.warn('LiveKit audio playback pending:', audioState.reason);
          }
          syncDiagnostics();
        }
      } catch (mediaError) {
        if (cancelled) return;
        console.error('Media sync error:', mediaError);
        setError(mediaError.message || 'Connected, but camera/microphone access is unavailable.');
        syncDiagnostics();
      }
    };

    syncMedia();

    return () => {
      cancelled = true;
    };
  }, [cameraOn, micOn, room, syncDiagnostics]);

  useEffect(() => {
    if (!room) return undefined;

    syncDiagnostics();
    const interval = setInterval(syncDiagnostics, 1000);
    return () => clearInterval(interval);
  }, [room, syncDiagnostics]);

  const toggleMicrophone = useCallback(async (nextValue) => {
    if (!roomRef.current) throw new Error('Live room is not connected yet.');
    const audioState = await ensureLiveKitAudioPlayback(roomRef.current);
    await setLiveKitMediaEnabled(roomRef.current, { microphone: nextValue });
    setError('');
    if (!audioState.started && audioState.reason && roomRef.current.canPlaybackAudio === false) {
      console.warn('LiveKit audio playback pending:', audioState.reason);
    }
    syncDiagnostics(roomRef.current);
  }, [syncDiagnostics]);

  const toggleCamera = useCallback(async (nextValue) => {
    if (!roomRef.current) throw new Error('Live room is not connected yet.');
    const audioState = await ensureLiveKitAudioPlayback(roomRef.current);
    await setLiveKitMediaEnabled(roomRef.current, { camera: nextValue });
    setError('');
    if (!audioState.started && audioState.reason && roomRef.current.canPlaybackAudio === false) {
      console.warn('LiveKit audio playback pending:', audioState.reason);
    }
    syncDiagnostics(roomRef.current);
  }, [syncDiagnostics]);

  return useMemo(() => ({
    room,
    participants,
    status,
    error,
    diagnostics,
    toggleMicrophone,
    toggleCamera,
  }), [diagnostics, error, participants, room, status, toggleCamera, toggleMicrophone]);
}

export default useBattleRoomMedia;
