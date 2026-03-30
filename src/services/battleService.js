import {
  Timestamp,
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  runTransaction,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from 'firebase/firestore';
import { getDownloadURL, ref as storageRef, uploadBytes } from 'firebase/storage';
import { db, ensureFirebaseSession, storage } from './firebase';

const COLLECTION = 'battles';
const REQUIRED_SLOTS = ['artistA', 'artistB', 'judge1', 'judge2'];
const RANDOM_ROLE_SLOT_ORDER = {
  artist: ['artistA', 'artistB'],
  judge: ['judge1', 'judge2'],
  spectator: [],
};
const JOIN_BY_CODE_SLOT_ORDER = ['artistA', 'artistB', 'judge1', 'judge2'];
const ACTIVE_STATES = ['selection', 'active', 'voting', 'overtime'];
const SELECTION_MS = 30_000;
const VOTING_MS = 30_000;
const ARTIST_MS = 180_000;
const OVERTIME_MS = 60_000;

function battlesCollection() {
  return collection(db, COLLECTION);
}

function battleDoc(battleId) {
  return doc(db, COLLECTION, battleId);
}

function participantsCollection(battleId) {
  return collection(db, COLLECTION, battleId, 'participants');
}

function participantDoc(battleId, uid) {
  return doc(db, COLLECTION, battleId, 'participants', uid);
}

function messagesCollection(battleId) {
  return collection(db, COLLECTION, battleId, 'messages');
}

function nowTimestamp() {
  return Timestamp.now();
}

function defaultBattleData({ createdBy, createdByName, isCustom, roomCode }) {
  return {
    status: 'waiting',
    artistA: null,
    artistB: null,
    judge1: null,
    judge2: null,
    createdBy,
    createdByName,
    isCustom,
    roomCode,
    phaseStartTime: null,
    currentTurn: null,
    tracks: {
      artistA: null,
      artistB: null,
    },
    timers: {
      artistA: ARTIST_MS,
      artistB: ARTIST_MS,
    },
    overtimeTimers: {
      artistA: OVERTIME_MS,
      artistB: OVERTIME_MS,
    },
    votes: {
      judge1: null,
      judge2: null,
      crowd: null,
    },
    crowdVotes: {},
    winner: null,
    livekitRoomName: null,
    updatedAt: serverTimestamp(),
    createdAt: serverTimestamp(),
  };
}

function buildParticipant({ uid, role, displayName, photoURL }) {
  return {
    uid,
    role,
    displayName,
    photoURL: photoURL || '',
    isMicOn: true,
    isCameraOn: true,
    joinedAt: serverTimestamp(),
  };
}

function generateRoomCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let index = 0; index < 6; index += 1) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
}

function battleIncludesUser(battle, userId) {
  return REQUIRED_SLOTS.some((slot) => battle[slot] === userId);
}

function getBattleSlotForUser(battle, userId) {
  return REQUIRED_SLOTS.find((slot) => battle[slot] === userId) || null;
}

function getOpenSlot(battle, slotOrder) {
  for (const slot of slotOrder) {
    if (!battle[slot]) {
      return slot;
    }
  }
  return null;
}

function getRoleForSlot(slot) {
  if (slot === 'artistA' || slot === 'artistB') return 'artist';
  if (slot === 'judge1' || slot === 'judge2') return 'judge';
  return 'spectator';
}

function getCountdownStartMs(value) {
  if (!value) return 0;
  if (typeof value.toMillis === 'function') return value.toMillis();
  if (typeof value.seconds === 'number') return value.seconds * 1000;
  return Date.now();
}

function hasRequiredSlotsFilled(battle) {
  return REQUIRED_SLOTS.every((slot) => !!battle[slot]);
}

function getCurrentTurnMs(battle) {
  if (!battle.currentTurn) return 0;
  if (battle.currentTurn === 'artistA') return battle.timers?.artistA ?? ARTIST_MS;
  if (battle.currentTurn === 'artistB') return battle.timers?.artistB ?? ARTIST_MS;
  if (battle.currentTurn === 'overtimeA') return battle.overtimeTimers?.artistA ?? OVERTIME_MS;
  if (battle.currentTurn === 'overtimeB') return battle.overtimeTimers?.artistB ?? OVERTIME_MS;
  return 0;
}

function calculateCrowdVote(crowdVotes = {}) {
  const totals = { artistA: 0, artistB: 0 };
  Object.values(crowdVotes).forEach((vote) => {
    if (vote === 'artistA' || vote === 'artistB') {
      totals[vote] += 1;
    }
  });

  if (totals.artistA === totals.artistB) {
    return null;
  }

  return totals.artistA > totals.artistB ? 'artistA' : 'artistB';
}

function countVotes(votes) {
  const tallies = { artistA: 0, artistB: 0 };
  ['judge1', 'judge2', 'crowd'].forEach((voteKey) => {
    const target = votes?.[voteKey];
    if (target === 'artistA' || target === 'artistB') {
      tallies[target] += 1;
    }
  });
  return tallies;
}

function resolveWinnerFromVotes(votes) {
  const tallies = countVotes(votes);
  if (tallies.artistA === tallies.artistB) return 'draw';
  return tallies.artistA > tallies.artistB ? 'artistA' : 'artistB';
}

async function addSystemMessage(battleId, message, type = 'system') {
  try {
    await ensureFirebaseSession();
    await addDoc(messagesCollection(battleId), {
      type,
      system: true,
      username: 'Dreamledge',
      message,
      createdAt: serverTimestamp(),
    });
  } catch (error) {
    console.error('System message error:', error);
  }
}

async function assignSlotAndJoin({ battleId, uid, displayName, photoURL, slotPreference }) {
  const resolved = await runTransaction(db, async (transaction) => {
    const battleRef = battleDoc(battleId);
    const participantRef = participantDoc(battleId, uid);
    const battleSnap = await transaction.get(battleRef);
    if (!battleSnap.exists()) {
      throw new Error('Room not found');
    }

    const participantSnap = await transaction.get(participantRef);
    const battle = battleSnap.data();
    const alreadyAssignedSlot = REQUIRED_SLOTS.find((slot) => battle[slot] === uid) || null;
    let assignedSlot = alreadyAssignedSlot;

    if (!assignedSlot) {
      const occupiedElsewhere = REQUIRED_SLOTS.filter((slot) => battle[slot] === uid);
      if (occupiedElsewhere.length > 1) {
        throw new Error('User already occupies multiple required roles in this room');
      }
    }

    if (!assignedSlot && !participantSnap.exists()) {
      assignedSlot = getOpenSlot(battle, slotPreference);
    }

    if (!assignedSlot && participantSnap.exists()) {
      const existingParticipant = participantSnap.data();
      return {
        battleId,
        role: existingParticipant.role,
        slot: existingParticipant.role,
        transitionedToSelection: false,
        livekitRoomName: battle.livekitRoomName || battleId,
        status: battle.status,
      };
    }

    const role = assignedSlot ? assignedSlot : 'spectator';
    const updates = {
      updatedAt: serverTimestamp(),
    };

    if (assignedSlot) {
      updates[assignedSlot] = uid;
    }

    const roleFields = {
      ...battle,
      ...updates,
    };

    const transitionedToSelection = battle.status === 'waiting' && hasRequiredSlotsFilled(roleFields);

    if (transitionedToSelection) {
      updates.status = 'selection';
      updates.phaseStartTime = nowTimestamp();
      updates.currentTurn = null;
      updates.livekitRoomName = battle.livekitRoomName || battleId;
    }

    transaction.update(battleRef, updates);
    transaction.set(
      participantRef,
      buildParticipant({
        uid,
        role,
        displayName,
        photoURL,
      }),
      { merge: true },
    );

    return {
      battleId,
      role: getRoleForSlot(role),
      slot: role,
      transitionedToSelection,
      livekitRoomName: battle.livekitRoomName || battleId,
      status: transitionedToSelection ? 'selection' : battle.status,
    };
  });

  if (resolved.transitionedToSelection) {
    await addSystemMessage(battleId, 'All required roles are filled. Track selection has started.');
  }

  return resolved;
}

async function maybeAdvanceBattlePhaseInternal(battleId, battle) {
  if (!battle || !ACTIVE_STATES.includes(battle.status)) {
    return battle;
  }

  const currentPhaseStart = getCountdownStartMs(battle.phaseStartTime);
  const elapsed = Date.now() - currentPhaseStart;

  if (battle.status === 'selection') {
    const hasArtistATrack = !!battle.tracks?.artistA;
    const hasArtistBTrack = !!battle.tracks?.artistB;

    if (hasArtistATrack && hasArtistBTrack) {
      await updateDoc(battleDoc(battleId), {
        status: 'active',
        phaseStartTime: nowTimestamp(),
        currentTurn: 'artistA',
        updatedAt: serverTimestamp(),
      });
      await addSystemMessage(battleId, 'Both tracks are locked in. Artist A is now performing.');
      return null;
    }

    if (elapsed >= SELECTION_MS) {
      if (hasArtistATrack && !hasArtistBTrack) {
        await updateDoc(battleDoc(battleId), {
          status: 'finished',
          winner: 'artistA',
          updatedAt: serverTimestamp(),
        });
        await addSystemMessage(battleId, 'Artist B failed to submit. Artist A wins by default.');
      } else if (!hasArtistATrack && hasArtistBTrack) {
        await updateDoc(battleDoc(battleId), {
          status: 'finished',
          winner: 'artistB',
          updatedAt: serverTimestamp(),
        });
        await addSystemMessage(battleId, 'Artist A failed to submit. Artist B wins by default.');
      } else {
        await updateDoc(battleDoc(battleId), {
          status: 'cancelled',
          winner: null,
          updatedAt: serverTimestamp(),
        });
        await addSystemMessage(battleId, 'No tracks were submitted. The battle has been cancelled.');
      }
      return null;
    }
  }

  if (battle.status === 'active' || battle.status === 'overtime') {
    const currentTurnMs = getCurrentTurnMs(battle);
    if (elapsed < currentTurnMs) {
      return battle;
    }

    const updates = { updatedAt: serverTimestamp() };

    if (battle.currentTurn === 'artistA') {
      updates['timers.artistA'] = 0;
      updates.currentTurn = 'artistB';
      updates.phaseStartTime = nowTimestamp();
      await updateDoc(battleDoc(battleId), updates);
      await addSystemMessage(battleId, 'Artist A time expired. Artist B is now performing.');
      return null;
    }

    if (battle.currentTurn === 'artistB') {
      updates['timers.artistB'] = 0;
      updates.status = 'voting';
      updates.currentTurn = null;
      updates.phaseStartTime = nowTimestamp();
      updates.votes = { judge1: null, judge2: null, crowd: null };
      updates.crowdVotes = {};
      await updateDoc(battleDoc(battleId), updates);
      await addSystemMessage(battleId, 'Main battle complete. Voting is now open.');
      return null;
    }

    if (battle.currentTurn === 'overtimeA') {
      updates['overtimeTimers.artistA'] = 0;
      updates.currentTurn = 'overtimeB';
      updates.phaseStartTime = nowTimestamp();
      await updateDoc(battleDoc(battleId), updates);
      await addSystemMessage(battleId, 'Overtime switches to Artist B.');
      return null;
    }

    if (battle.currentTurn === 'overtimeB') {
      updates['overtimeTimers.artistB'] = 0;
      updates.status = 'voting';
      updates.currentTurn = null;
      updates.phaseStartTime = nowTimestamp();
      updates.votes = { judge1: null, judge2: null, crowd: null };
      updates.crowdVotes = {};
      await updateDoc(battleDoc(battleId), updates);
      await addSystemMessage(battleId, 'Overtime performances are done. Final voting is now open.');
      return null;
    }
  }

  if (battle.status === 'voting' && elapsed >= VOTING_MS) {
    const crowdVote = calculateCrowdVote(battle.crowdVotes);
    const resolvedVotes = {
      ...(battle.votes || {}),
      crowd: crowdVote,
    };
    const result = resolveWinnerFromVotes(resolvedVotes);

    if (result === 'draw' && !battle.overtimeRound) {
      await updateDoc(battleDoc(battleId), {
        status: 'overtime',
        phaseStartTime: nowTimestamp(),
        currentTurn: 'overtimeA',
        overtimeRound: true,
        votes: { judge1: null, judge2: null, crowd: null },
        crowdVotes: {},
        updatedAt: serverTimestamp(),
      });
      await addSystemMessage(battleId, 'Voting ended in a tie. Overtime has started.');
      return null;
    }

    await updateDoc(battleDoc(battleId), {
      status: 'finished',
      winner: result,
      votes: resolvedVotes,
      updatedAt: serverTimestamp(),
    });
    await addSystemMessage(
      battleId,
      result === 'draw' ? 'Battle ends in a draw after overtime.' : `${result === 'artistA' ? 'Artist A' : 'Artist B'} wins the battle.`,
    );
    return null;
  }

  return battle;
}

export const battleService = {
  async createWaitingRoom(roomName, hostUserId, hostUsername, preferredRole = 'artist', options = {}) {
    await ensureFirebaseSession();
    const battleRef = doc(battlesCollection());
    const isCustom = !!options.visibility && options.visibility === 'private';
    const roomCode = isCustom ? generateRoomCode() : null;
    const slotOrder = RANDOM_ROLE_SLOT_ORDER[preferredRole] || [];
    const initialSlot = getOpenSlot(defaultBattleData({ createdBy: hostUserId, createdByName: hostUsername, isCustom, roomCode }), slotOrder);

    const initialData = {
      ...defaultBattleData({ createdBy: hostUserId, createdByName: hostUsername, isCustom, roomCode }),
      livekitRoomName: battleRef.id,
      name: roomName || 'Battle Room',
      ...(initialSlot ? { [initialSlot]: hostUserId } : {}),
    };

    await setDoc(battleRef, initialData);
    await setDoc(
      participantDoc(battleRef.id, hostUserId),
      buildParticipant({
        uid: hostUserId,
        role: initialSlot || 'spectator',
        displayName: hostUsername,
        photoURL: options.photoURL,
      }),
      { merge: true },
    );
    await addSystemMessage(battleRef.id, `${hostUsername} created the room.`);
    return battleRef.id;
  },

  async findMatch(role, userId, displayName, photoURL) {
    await ensureFirebaseSession();
    const battleQuery = query(battlesCollection(), where('status', '==', 'waiting'));
    const snapshot = await getDocs(battleQuery);
    const candidates = [];
    snapshot.forEach((docSnap) => {
      const battle = { id: docSnap.id, ...docSnap.data() };
      if (battle.isCustom) return;
      if (battleIncludesUser(battle, userId)) return;
      if (getOpenSlot(battle, RANDOM_ROLE_SLOT_ORDER[role] || [])) {
        candidates.push(battle);
      }
    });

    candidates.sort((left, right) => {
      const leftFilled = REQUIRED_SLOTS.filter((slot) => !!left[slot]).length;
      const rightFilled = REQUIRED_SLOTS.filter((slot) => !!right[slot]).length;
      return rightFilled - leftFilled;
    });

    if (!candidates.length) {
      return null;
    }

    return assignSlotAndJoin({
      battleId: candidates[0].id,
      uid: userId,
      displayName,
      photoURL,
      slotPreference: RANDOM_ROLE_SLOT_ORDER[role],
    });
  },

  async findExistingBattleForUser(userId) {
    await ensureFirebaseSession();
    const battleQuery = query(
      battlesCollection(),
      where('status', 'in', ['waiting', 'selection', 'active', 'voting', 'overtime', 'finished'])
    );
    const snapshot = await getDocs(battleQuery);
    const battles = snapshot.docs
      .map((docSnap) => ({ id: docSnap.id, ...docSnap.data() }))
      .filter((battle) => battleIncludesUser(battle, userId));

    battles.sort((left, right) => {
      const leftUpdated = left.updatedAt?.seconds || 0;
      const rightUpdated = right.updatedAt?.seconds || 0;
      return rightUpdated - leftUpdated;
    });

    if (!battles[0]) {
      return null;
    }

    return {
      ...battles[0],
      slot: getBattleSlotForUser(battles[0], userId),
    };
  },

  async leaveAllUserBattles(userId) {
    await ensureFirebaseSession();
    const battleQuery = query(
      battlesCollection(),
      where('status', 'in', ['waiting', 'selection', 'active', 'voting', 'overtime', 'finished'])
    );
    const snapshot = await getDocs(battleQuery);
    const relevantBattles = snapshot.docs
      .map((docSnap) => ({ id: docSnap.id, ...docSnap.data() }))
      .filter((battle) => battleIncludesUser(battle, userId));

    await Promise.all(relevantBattles.map((battle) => battleService.leaveWaitingRoom(battle.id, userId)));
  },

  async joinWaitingRoom(battleId, userId, displayName, role = 'artist', photoURL = '') {
    await ensureFirebaseSession();
    const slotPreference = role === 'spectator' ? [] : RANDOM_ROLE_SLOT_ORDER[role] || [];
    return assignSlotAndJoin({
      battleId,
      uid: userId,
      displayName,
      photoURL,
      slotPreference,
    });
  },

  async joinByCode(roomCode, userId, displayName, photoURL = '') {
    await ensureFirebaseSession();
    const roomQuery = query(battlesCollection(), where('roomCode', '==', roomCode));
    const snapshot = await getDocs(roomQuery);
    if (snapshot.empty) {
      throw new Error('Room not found');
    }

    const battleId = snapshot.docs[0].id;
    return assignSlotAndJoin({
      battleId,
      uid: userId,
      displayName,
      photoURL,
      slotPreference: JOIN_BY_CODE_SLOT_ORDER,
    });
  },

  async findSpectatorMatch(userId, displayName, photoURL = '') {
    await ensureFirebaseSession();
    const battleQuery = query(battlesCollection(), where('status', 'in', ['waiting', 'selection', 'active', 'voting', 'overtime', 'finished']));
    const snapshot = await getDocs(battleQuery);
    const candidates = [];
    snapshot.forEach((docSnap) => {
      const battle = { id: docSnap.id, ...docSnap.data() };
      if (!battle.isCustom) {
        candidates.push(battle);
      }
    });

    candidates.sort((left, right) => {
      const leftFilled = REQUIRED_SLOTS.filter((slot) => !!left[slot]).length;
      const rightFilled = REQUIRED_SLOTS.filter((slot) => !!right[slot]).length;
      return rightFilled - leftFilled;
    });

    if (!candidates.length) {
      return null;
    }

    const battle = candidates[0];
    await setDoc(
      participantDoc(battle.id, userId),
      buildParticipant({ uid: userId, role: 'spectator', displayName, photoURL }),
      { merge: true },
    );

    return { battleId: battle.id, status: battle.status };
  },

  async leaveWaitingRoom(battleId, userId) {
    await ensureFirebaseSession();
    const battleRef = battleDoc(battleId);
    const participantRef = participantDoc(battleId, userId);
    const result = await runTransaction(db, async (transaction) => {
      const battleSnap = await transaction.get(battleRef);
      const participantSnap = await transaction.get(participantRef);
      if (!battleSnap.exists()) {
        return null;
      }

      const battle = battleSnap.data();
      const participant = participantSnap.exists() ? participantSnap.data() : null;
      if (!participant) {
        return battle;
      }

      const updates = { updatedAt: serverTimestamp() };
      REQUIRED_SLOTS.forEach((slot) => {
        if (battle[slot] === userId) {
          updates[slot] = null;
        }
      });

      if (battle.status === 'waiting' || battle.status === 'selection') {
        updates.status = hasRequiredSlotsFilled({ ...battle, ...updates }) ? battle.status : 'waiting';
        if (updates.status === 'waiting') {
          updates.phaseStartTime = null;
          updates.currentTurn = null;
        }
      }

      if ((battle.status === 'active' || battle.status === 'overtime') && participant.role === 'artistA') {
        updates.status = 'finished';
        updates.winner = 'artistB';
      }

      if ((battle.status === 'active' || battle.status === 'overtime') && participant.role === 'artistB') {
        updates.status = 'finished';
        updates.winner = 'artistA';
      }

      if (['active', 'voting', 'overtime'].includes(battle.status) && (participant.role === 'judge1' || participant.role === 'judge2')) {
        updates.status = 'cancelled';
        updates.winner = null;
      }

      transaction.update(battleRef, updates);
      transaction.delete(participantRef);
      return { ...battle, ...updates, departedRole: participant.role, departedName: participant.displayName };
    });

    if (result?.departedName) {
      await addSystemMessage(battleId, `${result.departedName} left the room.`);
    }
  },

  subscribeToWaitingRoom(battleId, callback) {
    ensureFirebaseSession().catch((error) => {
      console.error('subscribeToWaitingRoom auth error:', error);
    });
    return onSnapshot(battleDoc(battleId), async (snapshot) => {
      if (!snapshot.exists()) {
        callback(null);
        return;
      }

      const battle = { id: snapshot.id, ...snapshot.data() };
      await maybeAdvanceBattlePhaseInternal(snapshot.id, battle);
      callback(battle);
    });
  },

  subscribeToWaitingRooms(callback) {
    ensureFirebaseSession().catch((error) => {
      console.error('subscribeToWaitingRooms auth error:', error);
    });
    const roomsQuery = query(battlesCollection(), where('status', 'in', ['waiting', 'selection', 'active', 'voting', 'overtime', 'finished']));
    return onSnapshot(roomsQuery, (snapshot) => {
      const rooms = snapshot.docs
        .map((docSnap) => ({ id: docSnap.id, ...docSnap.data() }))
        .filter((room) => !room.isCustom);
      callback(rooms.sort((left, right) => {
        const leftUpdated = left.updatedAt?.seconds || 0;
        const rightUpdated = right.updatedAt?.seconds || 0;
        return rightUpdated - leftUpdated;
      }));
    });
  },

  subscribeToParticipants(battleId, callback) {
    ensureFirebaseSession().catch((error) => {
      console.error('subscribeToParticipants auth error:', error);
    });
    const participantsQuery = query(participantsCollection(battleId), orderBy('joinedAt', 'asc'));
    return onSnapshot(participantsQuery, (snapshot) => {
      callback(snapshot.docs.map((docSnap) => ({ id: docSnap.id, ...docSnap.data() })));
    });
  },

  subscribeToBattle(battleId, callback) {
    ensureFirebaseSession().catch((error) => {
      console.error('subscribeToBattle auth error:', error);
    });
    return onSnapshot(battleDoc(battleId), async (snapshot) => {
      if (!snapshot.exists()) {
        callback(null);
        return;
      }

      const battle = { id: snapshot.id, ...snapshot.data() };
      await maybeAdvanceBattlePhaseInternal(snapshot.id, battle);
      callback(battle);
    });
  },

  subscribeToMessages(battleId, callback) {
    ensureFirebaseSession().catch((error) => {
      console.error('subscribeToMessages auth error:', error);
    });
    const messagesQuery = query(messagesCollection(battleId), orderBy('createdAt', 'asc'));
    return onSnapshot(messagesQuery, (snapshot) => {
      callback(
        snapshot.docs.map((docSnap) => ({
          id: docSnap.id,
          ...docSnap.data(),
          time: docSnap.data().createdAt?.toDate?.().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) || '',
        })),
      );
    });
  },

  async sendMessage(battleId, payload) {
    await ensureFirebaseSession();
    await addDoc(messagesCollection(battleId), {
      ...payload,
      createdAt: serverTimestamp(),
    });
  },

  async submitTrack(battleId, slot, trackUrl) {
    await ensureFirebaseSession();
    const battleRef = battleDoc(battleId);
    const updates = {
      [`tracks.${slot}`]: trackUrl,
      updatedAt: serverTimestamp(),
    };
    await updateDoc(battleRef, updates);

    const battleSnap = await getDoc(battleRef);
    const battle = battleSnap.data();
    if (battle?.tracks?.artistA && battle?.tracks?.artistB && battle?.status === 'selection') {
      await updateDoc(battleRef, {
        status: 'active',
        phaseStartTime: nowTimestamp(),
        currentTurn: 'artistA',
        updatedAt: serverTimestamp(),
      });
      await addSystemMessage(battleId, 'Both tracks submitted. Artist A starts now.');
    }
  },

  async uploadTrackFile(battleId, slot, file) {
    await ensureFirebaseSession();
    const trackRef = storageRef(storage, `battles/${battleId}/${slot}/${Date.now()}-${file.name}`);
    await uploadBytes(trackRef, file);
    const downloadURL = await getDownloadURL(trackRef);
    await battleService.submitTrack(battleId, slot, downloadURL);
    return downloadURL;
  },

  async castVote(battleId, voterId, username, role, targetId) {
    await ensureFirebaseSession();
    const battleRef = battleDoc(battleId);
    await runTransaction(db, async (transaction) => {
      const battleSnap = await transaction.get(battleRef);
      if (!battleSnap.exists()) {
        throw new Error('Battle not found');
      }

      const battle = battleSnap.data();
      if (battle.status !== 'voting') {
        throw new Error('Voting is closed');
      }

       if (!['judge1', 'judge2', 'spectator'].includes(role)) {
        throw new Error('Only judges and spectators can vote');
      }

      const updates = { updatedAt: serverTimestamp() };
      if (role === 'judge1' || role === 'judge2') {
        if (battle.votes?.[role]) {
          throw new Error('Judge vote already submitted');
        }
        updates[`votes.${role}`] = targetId;
      } else {
        updates[`crowdVotes.${voterId}`] = targetId;
      }

      transaction.update(battleRef, updates);
    });

    await addSystemMessage(battleId, `${username} cast a vote.`, 'vote');
  },

  async updateParticipantMediaState(battleId, uid, updates) {
    await ensureFirebaseSession();
    await setDoc(participantDoc(battleId, uid), updates, { merge: true });
  },

  async maybeAdvanceBattlePhase(battleId) {
    await ensureFirebaseSession();
    const snap = await getDoc(battleDoc(battleId));
    if (!snap.exists()) {
      return null;
    }
    return maybeAdvanceBattlePhaseInternal(battleId, { id: snap.id, ...snap.data() });
  },
};

export default battleService;
