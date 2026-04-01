import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  connectToLiveKitRoom,
  disconnectFromLiveKitRoom,
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
  };
}

export function useBattleRoomMedia({ roomName, identity, displayName, role, cameraOn, micOn, enabled = true }) {
  const [room, setRoom] = useState(null);
  const [participants, setParticipants] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  const [diagnostics, setDiagnostics] = useState(defaultDiagnostics);

  useEffect(() => {
    if (!enabled || !roomName || !identity) {
      return undefined;
    }

    let disposed = false;
    let connectedRoom = null;

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

        if (nextState === 'connected') setStatus('connected');
        else if (nextState === 'reconnecting') setStatus('reconnecting');
        else if (nextState === 'disconnected') setStatus('disconnected');

        setDiagnostics(getRoomMediaDiagnostics(roomInstance || connectedRoom));
      },
    })
      .then(async (nextRoom) => {
        if (disposed) {
          disconnectFromLiveKitRoom(nextRoom);
          return;
        }

        connectedRoom = nextRoom;
        setRoom(nextRoom);
        setStatus('connected');
        setDiagnostics(getRoomMediaDiagnostics(nextRoom));

        try {
          await setLiveKitMediaEnabled(nextRoom, { microphone: micOn, camera: cameraOn });
        } catch (mediaError) {
          console.error('Initial media enable error:', mediaError);
          setError(mediaError.message || 'Connected, but camera/microphone access is unavailable.');
        }
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
      setRoom(null);
      setParticipants([]);
      setDiagnostics(defaultDiagnostics());
    };
  }, [cameraOn, displayName, enabled, identity, micOn, role, roomName]);

  const syncDiagnostics = useCallback(() => {
    setDiagnostics(getRoomMediaDiagnostics(room));
  }, [room]);

  useEffect(() => {
    if (!room) return undefined;

    syncDiagnostics();
    const interval = setInterval(syncDiagnostics, 1000);
    return () => clearInterval(interval);
  }, [room, syncDiagnostics]);

  const toggleMicrophone = useCallback(async (nextValue) => {
    if (!room) throw new Error('Live room is not connected yet.');
    await setLiveKitMediaEnabled(room, { microphone: nextValue });
    syncDiagnostics();
  }, [room, syncDiagnostics]);

  const toggleCamera = useCallback(async (nextValue) => {
    if (!room) throw new Error('Live room is not connected yet.');
    await setLiveKitMediaEnabled(room, { camera: nextValue });
    syncDiagnostics();
  }, [room, syncDiagnostics]);

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
