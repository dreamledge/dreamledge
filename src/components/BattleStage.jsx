import BattleVideoTile from './BattleVideoTile';

const SLOT_ORDER = ['artistA', 'artistB', 'judge1', 'judge2'];

function BattleStage({ participantsBySlot, liveParticipants, currentTurnSlot, currentUserId }) {
  const getLiveParticipant = (uid) => liveParticipants.find((participant) => participant.identity === uid) || null;

  return (
    <section className="battle-stage-shell">
      <div className="battle-stage-header">
        <span className="battle-stage-kicker">Battle Broadcast</span>
        <h3>Live Cameras</h3>
      </div>

      <div className="battle-stage-grid">
        {SLOT_ORDER.map((slot, index) => {
          const participant = participantsBySlot[index] || null;
          const liveParticipant = participant ? getLiveParticipant(participant.uid) : null;
          const isActive = currentTurnSlot === slot;

          return (
            <div key={slot} className={`battle-stage-card ${isActive ? 'active' : ''}`}>
              <BattleVideoTile
                slot={slot}
                participant={participant}
                liveParticipant={liveParticipant}
                isLocal={participant?.uid === currentUserId}
                isSpeaking={!!liveParticipant?.isSpeaking}
                className={isActive ? 'active' : ''}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default BattleStage;
