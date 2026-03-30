import { useEffect, useMemo, useRef } from 'react';
import { VideoOff, MicOff } from 'lucide-react';
import { attachTrack, detachTrack, getParticipantAudioTrack, getParticipantVideoTrack } from '../services/livekitService';

function LiveMediaTile({ participant, liveParticipant, roleBadgeClass, roleLabel, emptyLabel, fallback, className = '', isLocal = false }) {
  const videoRef = useRef(null);
  const audioRef = useRef(null);

  const videoTrack = useMemo(() => getParticipantVideoTrack(liveParticipant?.participant), [liveParticipant]);
  const audioTrack = useMemo(() => getParticipantAudioTrack(liveParticipant?.participant), [liveParticipant]);

  useEffect(() => {
    const element = videoRef.current;
    if (!element || !videoTrack) return undefined;
    attachTrack(videoTrack, element);
    return () => detachTrack(videoTrack, element);
  }, [videoTrack]);

  useEffect(() => {
    const element = audioRef.current;
    if (!element || !audioTrack) return undefined;
    attachTrack(audioTrack, element);
    return () => detachTrack(audioTrack, element);
  }, [audioTrack]);

  if (!participant) {
    return (
      <div className={`video-box empty ${className}`.trim()}>
        <div className="empty-slot">
          {fallback}
          <span>{emptyLabel}</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`video-box has-participant ${className}`.trim()}>
      {videoTrack ? (
        <video ref={videoRef} className="live-video" autoPlay muted={isLocal} playsInline />
      ) : (
        <div className="video-placeholder">
          <div className="avatar-placeholder">{participant.displayName?.charAt(0) || '?'}</div>
        </div>
      )}
      {audioTrack && !isLocal && <audio ref={audioRef} autoPlay playsInline />}
      <div className="video-overlay">
        <div className="participant-info">
          <span className={`role-badge-small ${roleBadgeClass}`}>{roleLabel}</span>
          <span className="participant-name">{participant.displayName}</span>
        </div>
        <div className="media-indicators">
          {!participant.isMicOn && <MicOff size={14} />}
          {!participant.isCameraOn && <VideoOff size={14} />}
        </div>
      </div>
    </div>
  );
}

export default LiveMediaTile;
