import { Room, RoomEvent, Track } from 'livekit-client';

const LIVEKIT_URL = import.meta.env.VITE_LIVEKIT_URL || 'wss://tsm-5jmg1nfp.livekit.cloud';

function isLocalhostHost(hostname = '') {
  return hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '[::1]';
}

function resolveLiveKitTokenEndpoint() {
  const configuredEndpoint = import.meta.env.VITE_LIVEKIT_TOKEN_ENDPOINT || '';

  if (typeof window === 'undefined') {
    return configuredEndpoint || '/api/livekit-token';
  }

  const { hostname, protocol, origin } = window.location;

  if (configuredEndpoint) {
    return configuredEndpoint.startsWith('/') ? `${origin}${configuredEndpoint}` : configuredEndpoint;
  }

  if (isLocalhostHost(hostname)) {
    return `${protocol}//localhost:3001/api/livekit-token`;
  }

  return `${origin}/api/livekit-token`;
}

const LIVEKIT_TOKEN_ENDPOINT = resolveLiveKitTokenEndpoint();

async function fetchToken({ roomName, identity, displayName, role }) {
  if (!LIVEKIT_URL || !LIVEKIT_TOKEN_ENDPOINT) {
    throw new Error('LiveKit is not configured. Add VITE_LIVEKIT_URL and VITE_LIVEKIT_TOKEN_ENDPOINT if needed.');
  }

  try {
    const response = await fetch(LIVEKIT_TOKEN_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ roomName, identity, displayName, role }),
    });

    if (!response.ok) {
      const message = await response.text();
      throw new Error(message || `Token request failed at ${LIVEKIT_TOKEN_ENDPOINT}`);
    }

    const data = await response.json();
    return data.token;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown token service error.';
    throw new Error(`Unable to request token from ${LIVEKIT_TOKEN_ENDPOINT}: ${errorMessage}`);
  }
}

function parseMetadata(participant) {
  try {
    return participant.metadata ? JSON.parse(participant.metadata) : {};
  } catch {
    return {};
  }
}

export async function connectToLiveKitRoom({ roomName, identity, displayName, role, onParticipantsChanged, onConnectionStateChanged }) {
  const token = await fetchToken({ roomName, identity, displayName, role });
  const room = new Room({
    adaptiveStream: true,
    dynacast: true,
  });

  const emitParticipants = () => {
    const activeSpeakerIds = new Set((room.activeSpeakers || []).map((speaker) => speaker.identity));
    const participants = [room.localParticipant, ...Array.from(room.remoteParticipants.values())].map((participant) => ({
      identity: participant.identity,
      name: participant.name || participant.identity,
      ...parseMetadata(participant),
      isMicOn: participant.isMicrophoneEnabled,
      isCameraOn: participant.isCameraEnabled,
      audioLevel: participant.audioLevel || 0,
      isSpeaking: activeSpeakerIds.has(participant.identity) || !!participant.isSpeaking || (participant.audioLevel || 0) > 0.015,
      participant,
    }));
    onParticipantsChanged?.(participants);
  };

  const emitConnection = () => {
    onConnectionStateChanged?.(room.state, room);
  };

  room.on(RoomEvent.ParticipantConnected, emitParticipants);
  room.on(RoomEvent.ParticipantDisconnected, emitParticipants);
  room.on(RoomEvent.LocalTrackPublished, emitParticipants);
  room.on(RoomEvent.LocalTrackUnpublished, emitParticipants);
  room.on(RoomEvent.TrackMuted, emitParticipants);
  room.on(RoomEvent.TrackUnmuted, emitParticipants);
  room.on(RoomEvent.TrackPublished, emitParticipants);
  room.on(RoomEvent.TrackUnpublished, emitParticipants);
  room.on(RoomEvent.TrackSubscribed, emitParticipants);
  room.on(RoomEvent.TrackUnsubscribed, emitParticipants);
  room.on(RoomEvent.TrackSubscriptionStatusChanged, emitParticipants);
  room.on(RoomEvent.ActiveSpeakersChanged, emitParticipants);
  room.on(RoomEvent.ConnectionStateChanged, emitConnection);
  room.on(RoomEvent.Reconnecting, emitConnection);
  room.on(RoomEvent.Reconnected, emitConnection);
  room.on(RoomEvent.Disconnected, emitConnection);

  await room.connect(LIVEKIT_URL, token);
  emitConnection();
  emitParticipants();
  return room;
}

export async function ensureLiveKitAudioPlayback(room) {
  if (!room || typeof room.startAudio !== 'function') {
    return { started: false, reason: 'unsupported' };
  }

  try {
    await room.startAudio();
    return { started: true, reason: '' };
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Audio playback could not start yet.';
    return { started: false, reason: message };
  }
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
  return Array.from(participant.videoTrackPublications.values()).find(
    (publication) => publication.kind === Track.Kind.Video && !!publication.track,
  ) || null;
}

export function getParticipantAudioTrack(participant) {
  if (!participant) return null;
  return Array.from(participant.audioTrackPublications.values()).find(
    (publication) => publication.kind === Track.Kind.Audio && !!publication.track,
  ) || null;
}

export function getRoomMediaDiagnostics(room) {
  if (!room?.localParticipant) {
    return {
      isConnected: false,
      participantCount: 0,
      localCameraPublished: false,
      localMicPublished: false,
      remoteCount: 0,
      audioReady: false,
    };
  }

  const localParticipant = room.localParticipant;
  return {
    isConnected: room.state === 'connected',
    participantCount: room.remoteParticipants.size + 1,
    remoteCount: room.remoteParticipants.size,
    localCameraPublished: Array.from(localParticipant.videoTrackPublications.values()).some((publication) => !!publication.track),
    localMicPublished: Array.from(localParticipant.audioTrackPublications.values()).some((publication) => !!publication.track),
    audioReady: room.canPlaybackAudio !== false,
  };
}

export function disconnectFromLiveKitRoom(room) {
  room?.disconnect();
}
