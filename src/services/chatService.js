import { ref, push, onValue, off, set, serverTimestamp } from 'firebase/database';
import { rtdb } from './firebase';

export const chatService = {
  sendMessage: async (chatType, chatId, userId, username, message, isGif = false, gifUrl = null) => {
    try {
      const messagesRef = ref(rtdb, `chats/${chatType}/${chatId}/messages`);
      const newMessageRef = push(messagesRef);
      
      await set(newMessageRef, {
        id: newMessageRef.key,
        userId,
        username,
        message: message || '',
        isGif: isGif || false,
        gifUrl: gifUrl || null,
        timestamp: serverTimestamp(),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });
      console.log('Message sent successfully');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  },

  subscribeToMessages: (chatType, chatId, callback) => {
    try {
      const messagesRef = ref(rtdb, `chats/${chatType}/${chatId}/messages`);
      
      onValue(messagesRef, (snapshot) => {
        const messages = [];
        if (snapshot.exists()) {
          snapshot.forEach((child) => {
            messages.push(child.val());
          });
        }
        callback(messages);
      }, (error) => {
        console.error('Error subscribing to messages:', error);
      });

      return () => off(messagesRef);
    } catch (error) {
      console.error('Error setting up subscription:', error);
      return () => {};
    }
  },

  createRoom: async (roomName, createdBy) => {
    const roomsRef = ref(rtdb, 'chats/rooms');
    const newRoomRef = push(roomsRef);
    
    await set(newRoomRef, {
      id: newRoomRef.key,
      name: roomName,
      createdBy,
      createdAt: serverTimestamp(),
      members: { [createdBy]: true }
    });
    
    return newRoomRef.key;
  },

  joinRoom: async (roomId, userId) => {
    const roomRef = ref(rtdb, `chats/rooms/${roomId}/members/${userId}`);
    await set(roomRef, true);
  },

  leaveRoom: async (roomId, userId) => {
    const roomRef = ref(rtdb, `chats/rooms/${roomId}/members/${userId}`);
    await set(roomRef, null);
  }
};

export default chatService;