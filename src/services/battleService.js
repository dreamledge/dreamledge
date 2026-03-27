import { ref, set, get, onValue, off, push, serverTimestamp, update } from 'firebase/database';
import { rtdb } from './firebase';

export const battleService = {
  createWaitingRoom: async (roomName, hostUserId, hostUsername) => {
    const roomId = generateRoomCode();
    const roomRef = ref(rtdb, `waitingRooms/${roomId}`);
    
    await set(roomRef, {
      id: roomId,
      name: roomName || 'Battle Room',
      hostId: hostUserId,
      hostUsername,
      status: 'waiting',
      createdAt: serverTimestamp(),
      maxPlayers: 2,
      players: {
        [hostUserId]: {
          id: hostUserId,
          username: hostUsername,
          role: 'artist',
          isHost: true,
          joinedAt: serverTimestamp()
        }
      }
    });
    
    return roomId;
  },

  joinWaitingRoom: async (roomId, userId, username, role = 'artist') => {
    const roomRef = ref(rtdb, `waitingRooms/${roomId}`);
    const snapshot = await get(roomRef);
    
    if (!snapshot.exists()) {
      throw new Error('Room not found');
    }
    
    const room = snapshot.val();
    const players = room.players || {};
    const playerCount = Object.keys(players).length;
    
    if (playerCount >= room.maxPlayers) {
      throw new Error('Room is full');
    }
    
    const playerRef = ref(rtdb, `waitingRooms/${roomId}/players/${userId}`);
    await set(playerRef, {
      id: userId,
      username,
      role,
      isHost: false,
      joinedAt: serverTimestamp()
    });
    
    if (playerCount + 1 >= room.maxPlayers) {
      await update(roomRef, { status: 'ready' });
    }
    
    return room;
  },

  leaveWaitingRoom: async (roomId, userId) => {
    const playerRef = ref(rtdb, `waitingRooms/${roomId}/players/${userId}`);
    await set(playerRef, null);
    
    const roomRef = ref(rtdb, `waitingRooms/${roomId}`);
    const snapshot = await get(roomRef);
    
    if (snapshot.exists()) {
      const room = snapshot.val();
      const players = room.players || {};
      const playerCount = Object.keys(players).length;
      
      if (playerCount === 0) {
        await set(roomRef, null);
      } else if (room.hostId === userId) {
        const newHost = Object.keys(players)[0];
        await update(roomRef, { hostId: newHost });
      }
    }
  },

  getWaitingRoom: async (roomId) => {
    const roomRef = ref(rtdb, `waitingRooms/${roomId}`);
    const snapshot = await get(roomRef);
    return snapshot.exists() ? snapshot.val() : null;
  },

  subscribeToWaitingRoom: (roomId, callback) => {
    const roomRef = ref(rtdb, `waitingRooms/${roomId}`);
    
    onValue(roomRef, (snapshot) => {
      if (snapshot.exists()) {
        callback(snapshot.val());
      } else {
        callback(null);
      }
    });
    
    return () => off(roomRef);
  },

  subscribeToWaitingRooms: (callback) => {
    const roomsRef = ref(rtdb, 'waitingRooms');
    
    onValue(roomsRef, (snapshot) => {
      const rooms = [];
      if (snapshot.exists()) {
        snapshot.forEach((child) => {
          const room = child.val();
          if (room.status === 'waiting') {
            rooms.push(room);
          }
        });
      }
      callback(rooms);
    });
    
    return () => off(roomsRef);
  },

  startBattle: async (roomId) => {
    const roomRef = ref(rtdb, `waitingRooms/${roomId}`);
    const snapshot = await get(roomRef);
    
    if (!snapshot.exists()) {
      throw new Error('Room not found');
    }
    
    const room = snapshot.val();
    const players = room.players || {};
    const playerIds = Object.keys(players);
    
    if (playerIds.length < 2) {
      throw new Error('Need at least 2 players to start');
    }
    
    const battleId = `battle_${roomId}`;
    const battleRef = ref(rtdb, `battles/${battleId}`);
    
    await set(battleRef, {
      id: battleId,
      roomId,
      name: room.name,
      status: 'active',
      currentPhase: 'submission',
      round: 1,
      timeRemaining: 120,
      createdAt: serverTimestamp(),
      players: players,
      votes: {},
      tracks: {}
    });
    
    await update(roomRef, { status: 'started', battleId });
    
    return battleId;
  },

  findMatch: async (userId, username) => {
    const roomsRef = ref(rtdb, 'waitingRooms');
    const snapshot = await get(roomsRef);
    
    if (snapshot.exists()) {
      const rooms = snapshot.val();
      
      for (const [roomId, room] of Object.entries(rooms)) {
        if (room.status === 'waiting' && room.hostId !== userId) {
          const players = room.players || {};
          const playerCount = Object.keys(players).length;
          
          if (playerCount < room.maxPlayers) {
            await battleService.joinWaitingRoom(roomId, userId, username);
            return roomId;
          }
        }
      }
    }
    
    return null;
  }
};

function generateRoomCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

export default battleService;