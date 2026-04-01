import { Mic, MicOff, Video, VideoOff, X, Loader2 } from 'lucide-react';

function BattleRoomControls({ micOn, cameraOn, onToggleMic, onToggleCamera, onLeave, connectionStatus }) {
  const isBusy = connectionStatus === 'connecting' || connectionStatus === 'reconnecting';

  return (
    <div className="battle-room-controls">
      <div className="battle-room-status-row">
        <span className={`battle-connection-pill ${connectionStatus}`}>{connectionStatus}</span>
      </div>

      <div className="battle-room-control-row">
        <button type="button" className={`control-btn ${micOn ? 'active' : 'off'}`} onClick={onToggleMic} disabled={isBusy}>
          {isBusy ? <Loader2 size={18} className="spin" /> : micOn ? <Mic size={18} /> : <MicOff size={18} />}
        </button>
        <button type="button" className={`control-btn ${cameraOn ? 'active' : 'off'}`} onClick={onToggleCamera} disabled={isBusy}>
          {isBusy ? <Loader2 size={18} className="spin" /> : cameraOn ? <Video size={18} /> : <VideoOff size={18} />}
        </button>
        <button type="button" className="control-btn leave" onClick={onLeave}>
          <X size={18} />
        </button>
      </div>
    </div>
  );
}

export default BattleRoomControls;
