import { Mic, MicOff, Video, VideoOff, X, Loader2 } from 'lucide-react';

function BattleRoomControls({
  micOn,
  cameraOn,
  onToggleMic,
  onToggleCamera,
  onLeave,
  connectionStatus,
  micPending = false,
  cameraPending = false,
}) {
  const isRoomBusy = connectionStatus === 'connecting' || connectionStatus === 'reconnecting';

  return (
    <div className="battle-room-controls">
      <div className="battle-room-control-row">
        <button type="button" className={`control-btn ${micOn ? 'active' : 'off'}`} onClick={onToggleMic} disabled={isRoomBusy || micPending}>
          {micPending ? <Loader2 size={18} className="spin" /> : micOn ? <Mic size={18} /> : <MicOff size={18} />}
        </button>
        <button type="button" className={`control-btn ${cameraOn ? 'active' : 'off'}`} onClick={onToggleCamera} disabled={isRoomBusy || cameraPending}>
          {cameraPending ? <Loader2 size={18} className="spin" /> : cameraOn ? <Video size={18} /> : <VideoOff size={18} />}
        </button>
        <button type="button" className="control-btn leave" onClick={onLeave}>
          <X size={18} />
        </button>
      </div>
    </div>
  );
}

export default BattleRoomControls;
