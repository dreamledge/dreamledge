import { Mic, Gavel } from 'lucide-react';
import LiveMediaTile from './LiveMediaTile';

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

function BattleVideoTile({ slot, participant, liveParticipant, isLocal, isSpeaking, className = '' }) {
  const isArtistSlot = slot.startsWith('artist');

  return (
    <LiveMediaTile
      participant={participant}
      liveParticipant={liveParticipant}
      roleBadgeClass={isArtistSlot ? 'badge-artist' : 'badge-judge'}
      roleLabel={<>{getRoleIcon(slot)} {getRoleLabel(slot)}</>}
      emptyLabel={`${getRoleLabel(slot)} open`}
      fallback={isArtistSlot ? <Mic size={30} /> : <Gavel size={30} />}
      className={className}
      isLocal={isLocal}
      slotLabel={getRoleLabel(slot)}
      nameOverride={participant?.displayName || ''}
      isSpeaking={isSpeaking}
    />
  );
}

export default BattleVideoTile;
