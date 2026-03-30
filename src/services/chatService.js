import { ref, push, onValue, off, set, update, serverTimestamp } from 'firebase/database';
import { rtdb } from './firebase';

function formatTime() {
  return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function sortByTimestampDesc(items = []) {
  return [...items].sort((a, b) => {
    const aTime = a.lastMessageAt || a.timestamp || 0;
    const bTime = b.lastMessageAt || b.timestamp || 0;
    return bTime - aTime;
  });
}

async function upsertDirectInbox({ chatId, sender, recipient, previewText, isGif }) {
  const sentAt = Date.now();
  const time = formatTime();
  const lastMessage = isGif ? 'Sent a GIF' : previewText || 'New message';

  const senderInboxRef = ref(rtdb, `userChats/${sender.uid}/${chatId}`);
  const recipientInboxRef = ref(rtdb, `userChats/${recipient.uid}/${chatId}`);

  await update(senderInboxRef, {
    id: chatId,
    type: 'dm',
    uid: recipient.uid,
    otherUserId: recipient.uid,
    name: recipient.displayName || recipient.uid,
    photoURL: recipient.photoURL || null,
    avatar: recipient.photoURL || '#e63946',
    lastMessage,
    lastMessageType: isGif ? 'gif' : 'text',
    lastMessageAt: sentAt,
    time,
    unread: 0,
    lastSenderId: sender.uid,
  });

  const recipientInboxSnapshotRef = ref(rtdb, `userChats/${recipient.uid}/${chatId}`);

  await new Promise((resolve, reject) => {
    onValue(
      recipientInboxSnapshotRef,
      async (snapshot) => {
        off(recipientInboxSnapshotRef);
        const existingUnread = snapshot.exists() ? snapshot.val().unread || 0 : 0;

        try {
          await update(recipientInboxRef, {
            id: chatId,
            type: 'dm',
            uid: sender.uid,
            otherUserId: sender.uid,
            name: sender.displayName || sender.uid,
            photoURL: sender.photoURL || null,
            avatar: sender.photoURL || '#e63946',
            lastMessage,
            lastMessageType: isGif ? 'gif' : 'text',
            lastMessageAt: sentAt,
            time,
            unread: existingUnread + 1,
            lastSenderId: sender.uid,
          });
          resolve();
        } catch (error) {
          reject(error);
        }
      },
      reject,
      { onlyOnce: true },
    );
  });
}

async function ensureDirectInbox({ chatId, sender, recipient }) {
  const createdAt = Date.now();
  const time = formatTime();

  const senderInboxRef = ref(rtdb, `userChats/${sender.uid}/${chatId}`);
  const recipientInboxRef = ref(rtdb, `userChats/${recipient.uid}/${chatId}`);

  await update(senderInboxRef, {
    id: chatId,
    type: 'dm',
    uid: recipient.uid,
    otherUserId: recipient.uid,
    name: recipient.displayName || recipient.uid,
    photoURL: recipient.photoURL || null,
    avatar: recipient.photoURL || '#e63946',
    lastMessage: 'Start the conversation',
    lastMessageType: 'system',
    lastMessageAt: createdAt,
    time,
    unread: 0,
    lastSenderId: sender.uid,
  });

  await update(recipientInboxRef, {
    id: chatId,
    type: 'dm',
    uid: sender.uid,
    otherUserId: sender.uid,
    name: sender.displayName || sender.uid,
    photoURL: sender.photoURL || null,
    avatar: sender.photoURL || '#e63946',
    lastMessage: 'Start the conversation',
    lastMessageType: 'system',
    lastMessageAt: createdAt,
    time,
    unread: 0,
    lastSenderId: sender.uid,
  });
}

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
        timestamp: Date.now(),
        time: formatTime(),
      });
    } catch (error) {
      console.error('Error sending message:', error);
      throw error;
    }
  },

  sendDirectMessage: async ({ chatId, sender, recipient, message = '', isGif = false, gifUrl = null }) => {
    const messagesRef = ref(rtdb, `chats/dms/${chatId}/messages`);
    const newMessageRef = push(messagesRef);

    try {
      await set(newMessageRef, {
        id: newMessageRef.key,
        userId: sender.uid,
        username: sender.displayName,
        message: message || '',
        isGif: isGif || false,
        gifUrl: gifUrl || null,
        timestamp: Date.now(),
        time: formatTime(),
      });

      await upsertDirectInbox({
        chatId,
        sender,
        recipient,
        previewText: message,
        isGif,
      });
    } catch (error) {
      console.error('Error sending direct message:', error);
      throw error;
    }
  },

  createOrOpenDirectConversation: async ({ chatId, sender, recipient }) => {
    try {
      await ensureDirectInbox({ chatId, sender, recipient });
    } catch (error) {
      console.error('Error creating direct conversation:', error);
      throw error;
    }
  },

  subscribeToMessages: (chatType, chatId, callback) => {
    try {
      const messagesRef = ref(rtdb, `chats/${chatType}/${chatId}/messages`);

      onValue(
        messagesRef,
        (snapshot) => {
          const messages = [];
          if (snapshot.exists()) {
            snapshot.forEach((child) => {
              messages.push(child.val());
            });
          }
          callback(messages.sort((a, b) => (a.timestamp || 0) - (b.timestamp || 0)));
        },
        (error) => {
          console.error('Error subscribing to messages:', error);
        },
      );

      return () => off(messagesRef);
    } catch (error) {
      console.error('Error setting up subscription:', error);
      return () => {};
    }
  },

  subscribeToUserChats: (userId, callback) => {
    const userChatsRef = ref(rtdb, `userChats/${userId}`);

    onValue(
      userChatsRef,
      (snapshot) => {
        const conversations = [];
        if (snapshot.exists()) {
          snapshot.forEach((child) => {
            conversations.push({ id: child.key, ...child.val() });
          });
        }

        callback(sortByTimestampDesc(conversations));
      },
      (error) => {
        console.error('Error subscribing to user chats:', error);
      },
    );

    return () => off(userChatsRef);
  },

  subscribeToUnreadCount: (userId, callback) => {
    const userChatsRef = ref(rtdb, `userChats/${userId}`);

    onValue(
      userChatsRef,
      (snapshot) => {
        let unreadTotal = 0;

        if (snapshot.exists()) {
          snapshot.forEach((child) => {
            unreadTotal += child.val().unread || 0;
          });
        }

        callback(unreadTotal);
      },
      (error) => {
        console.error('Error subscribing to unread count:', error);
      },
    );

    return () => off(userChatsRef);
  },

  markConversationRead: async (userId, chatId) => {
    try {
      const userChatRef = ref(rtdb, `userChats/${userId}/${chatId}`);
      await update(userChatRef, {
        unread: 0,
        lastReadAt: Date.now(),
      });
    } catch (error) {
      console.error('Error marking conversation read:', error);
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
      members: { [createdBy]: true },
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
  },
};

export default chatService;
