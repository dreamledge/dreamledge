import { Room, RoomEvent, Track } from 'livekit-client';

const LIVEKIT_URL = import.meta.env.VITE_LIVEKIT_URL || 'wss://tsm-5jmg1nfp.livekit.cloud';
const DEFAULT_TOKEN_HOST = typeof window !== 'undefined' ? window.location.hostname : 'localhost';
const isDevHost = typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname.startsWith('192.168.') || window.location.hostname.startsWith('10.') || window.location.hostname.startsWith('172.'));
const LIVEKIT_TOKEN_ENDPOINT = import.meta.env.VITE_LIVEKIT_TOKEN_ENDPOINT || (isDevHost
  ? `${window.location.protocol}//${DEFAULT_TOKEN_HOST}:3001/api/livekit-token`
  : `${window.location.origin}/api/livekit-token`);

async function fetchToken({ roomName, identity, displayName, role }) {
  if (!LIVEKIT_URL || !LIVEKIT_TOKEN_ENDPOINT) {
    throw new Error('LiveKit is not configured. Add VITE_LIVEKIT_URL and VITE_LIVEKIT_TOKEN_ENDPOINT.');
  }

  const response = await fetch(LIVEKIT_TOKEN_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ roomName, identity, displayName, role }),
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || 'Unable to fetch LiveKit token');
  }

  const data = await response.json();
  return data.token;
}

export async function connectToLiveKitRoom({ roomName, identity, displayName, role, onParticipantsChanged }) {
  if (typeof navigator === 'undefined' || !navigator.mediaDevices || typeof navigator.mediaDevices.getUserMedia !== 'function') {
    throw new Error('Camera and microphone are not available on this device or browser.');
  }

  const token = await fetchToken({ roomName, identity, displayName, role });
  const room = new Room({
    adaptiveStream: true,
    dynacast: true,
  });

  const emitParticipants = () => {
    const participants = [room.localParticipant, ...Array.from(room.remoteParticipants.values())].map((participant) => ({
      identity: participant.identity,
      name: participant.name || participant.identity,
      isMicrophoneEnabled: participant.isMicrophoneEnabled,
      isCameraEnabled: participant.isCameraEnabled,
      participant,
    }));
    onParticipantsChanged?.(participants);
  };

  room.on(RoomEvent.ParticipantConnected, emitParticipants);
  room.on(RoomEvent.ParticipantDisconnected, emitParticipants);
  room.on(RoomEvent.LocalTrackPublished, emitParticipants);
  room.on(RoomEvent.LocalTrackUnpublished, emitParticipants);
  room.on(RoomEvent.TrackMuted, emitParticipants);
  room.on(RoomEvent.TrackUnmuted, emitParticipants);
  room.on(RoomEvent.TrackSubscribed, emitParticipants);
  room.on(RoomEvent.TrackUnsubscribed, emitParticipants);

  await room.connect(LIVEKIT_URL, token);
  emitParticipants();
  return room;
}

export async function setLiveKitMediaEnabled(room, { microphone, camera }) {
  if (!room?.localParticipant) return;
  if (typeof microphone === 'boolean') {
    await room.localParticipant.setMicrophoneEnabled(microphone);
  }
  if (typeof camera === 'boolean') {
    await room.localParticipant.setCameraEnabled(camera);
  }
}

export function attachTrack(trackPublication, element) {
  if (!trackPublication?.track || !element) return;
  trackPublication.track.attach(element);
}

export function detachTrack(trackPublication, element) {
  if (!trackPublication?.track || !element) return;
  trackPublication.track.detach(element);
}

export function getParticipantVideoTrack(participant) {
  if (!participant) return null;
  return Array.from(participant.videoTrackPublications.values()).find((publication) => publication.kind === Track.Kind.Video) || null;
}

export function getParticipantAudioTrack(participant) {
  if (!participant) return null;
  return Array.from(participant.audioTrackPublications.values()).find((publication) => publication.kind === Track.Kind.Audio) || null;
}

export function getRoomMediaDiagnostics(room) {
  if (!room?.localParticipant) {
    return {
      isConnected: false,
      participantCount: 0,
      localCameraPublished: false,
      localMicPublished: false,
      remoteCount: 0,
    };
  }

  const localParticipant = room.localParticipant;
  return {
    isConnected: room.state === 'connected',
    participantCount: room.remoteParticipants.size + 1,
    remoteCount: room.remoteParticipants.size,
    localCameraPublished: Array.from(localParticipant.videoTrackPublications.values()).some((publication) => !!publication.track),
    localMicPublished: Array.from(localParticipant.audioTrackPublications.values()).some((publication) => !!publication.track),
  };
}

export function disconnectFromLiveKitRoom(room) {
  room?.disconnect();
}
