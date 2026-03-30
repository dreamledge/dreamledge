import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuthStore, useUIStore } from '../stores/appStore';
import { chatService } from '../services/chatService';
import { userService } from '../services/userService';
import { Search, Plus, Send, Users, MessageCircle, Hash, ArrowLeft, X, Check } from 'lucide-react';
import GifPicker from '../components/GifPicker';
import './Messages.css';

const DEMO_ROOMS = [
  { id: 'room1', name: 'Battle Lounge', members: 24, isPublic: true },
  { id: 'room2', name: 'Underground Cypher', members: 156, isPublic: true },
  { id: 'room3', name: 'Hip Hop Heads', members: 89, isPublic: true },
  { id: 'room4', name: 'Beat Makers', members: 67, isPublic: true },
];

const DEMO_MESSAGES = [
  { id: 1, userId: '1', username: 'MC_Flow', message: 'GG last battle! 🔥', time: '2:30 PM' },
  { id: 2, userId: 'me', username: 'You', message: 'Thanks! You killed it too', time: '2:31 PM' },
  { id: 3, userId: '1', username: 'MC_Flow', message: 'Wanna go again?', time: '2:32 PM' },
  { id: 4, userId: 'me', username: 'You', message: 'I\'m down. Let me warm up first', time: '2:33 PM' },
  { id: 5, userId: '1', username: 'MC_Flow', message: 'Bet. I\'ll create a room', time: '2:34 PM' },
];

const ROOM_MESSAGES = [
  { id: 1, userId: 'user1', username: 'BeatMaker99', message: 'Who\'s ready for the next battle?', time: '12:45 PM' },
  { id: 2, userId: 'user2', username: 'FlowMaster', message: 'I am! Hit me up', time: '12:46 PM' },
  { id: 3, userId: 'user3', username: 'Lyricist', message: 'Gonna spectate this one', time: '12:47 PM' },
  { id: 4, userId: 'user4', username: 'HipHopFan', message: 'This arena is fire 🔥', time: '12:48 PM' },
];

function Messages() {
  const { conversationId } = useParams();
  const navigate = useNavigate();
  const { user, userProfile } = useAuthStore();
  const { isGifPickerOpen, toggleGifPicker, closeGifPicker } = useUIStore();
  const [conversations, setConversations] = useState([]);
  const [rooms, setRooms] = useState(DEMO_ROOMS);
  const [activeTab, setActiveTab] = useState(conversationId ? 'chat' : 'dms');
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [showCreateRoom, setShowCreateRoom] = useState(false);
  const [newRoomName, setNewRoomName] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [userResults, setUserResults] = useState([]);
  const [searchingUsers, setSearchingUsers] = useState(false);
  const chatEndRef = useRef(null);
  const chatMessagesRef = useRef(null);

  useEffect(() => {
    if (!user?.uid) {
      setConversations([]);
      return undefined;
    }

    const unsubscribe = chatService.subscribeToUserChats(user.uid, (nextConversations) => {
      setConversations(nextConversations);
    });

    return () => unsubscribe();
  }, [user?.uid]);

  useEffect(() => {
    if (conversationId) {
      const conv = conversations.find(c => c.id === conversationId)
        || rooms.find((room) => room.id === conversationId);
      if (conv) {
        setSelectedConversation((current) => {
          if (current?.id === conv.id) {
            return { ...current, ...conv };
          }
          return conv;
        });

        if (selectedConversation?.id !== conv.id) {
          setMessages(conv.type === 'room' ? ROOM_MESSAGES : []);
        }

        setActiveTab('chat');
      } else {
        setSelectedConversation(null);
        setMessages([]);
        setActiveTab('dms');
      }
    }
  }, [conversationId, conversations, rooms, selectedConversation?.id]);

  useEffect(() => {
    if (!selectedConversation || selectedConversation.type !== 'dm') {
      return;
    }

    const latestConversation = conversations.find((conversation) => conversation.id === selectedConversation.id);
    if (
      latestConversation
      && (
        latestConversation.lastMessage !== selectedConversation.lastMessage
        || latestConversation.time !== selectedConversation.time
        || latestConversation.unread !== selectedConversation.unread
        || latestConversation.photoURL !== selectedConversation.photoURL
      )
    ) {
      setSelectedConversation((current) => ({ ...current, ...latestConversation }));
    }
  }, [conversations, selectedConversation]);

  useEffect(() => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (!selectedConversation) return;
    
    const chatType = selectedConversation.type === 'room' ? 'rooms' : 'dms';
    const chatId = selectedConversation.id;
    
    const unsubscribe = chatService.subscribeToMessages(chatType, chatId, (realTimeMessages) => {
      if (realTimeMessages.length > 0) {
        setMessages(realTimeMessages);
        setIsConnected(true);
      } else if (messages.length === 0) {
        setIsConnected(false);
      }
    });
    
    return () => unsubscribe();
  }, [selectedConversation]);

  useEffect(() => {
    if (selectedConversation?.type === 'dm' && user?.uid) {
      chatService.markConversationRead(user.uid, selectedConversation.id);
    }
  }, [messages, selectedConversation, user?.uid]);

  const filteredConversations = conversations.filter(c => 
    (c.name || '').toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredRooms = rooms.filter(r => 
    (r.name || '').toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    if (activeTab !== 'dms') {
      setUserResults([]);
      setSearchingUsers(false);
      return undefined;
    }

    const trimmedQuery = searchQuery.trim();
    if (trimmedQuery.length < 2) {
      setUserResults([]);
      setSearchingUsers(false);
      return undefined;
    }

    let cancelled = false;
    setSearchingUsers(true);

    const timer = setTimeout(async () => {
      try {
        const results = await userService.searchUsers(trimmedQuery, user?.uid);
        if (!cancelled) {
          setUserResults(results);
        }
      } catch (error) {
        console.error('Failed to search users:', error);
        if (!cancelled) {
          setUserResults([]);
        }
      } finally {
        if (!cancelled) {
          setSearchingUsers(false);
        }
      }
    }, 200);

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [activeTab, searchQuery, user?.uid]);

  const openDirectMessage = async (profile) => {
    const dmId = [user?.uid || 'me', profile.uid].sort().join('__');
    const existingConversation = conversations.find((conversation) => conversation.id === dmId);
    const safeName = profile.displayName || profile.username || profile.email || profile.uid || 'Unknown user';

    const directConversation = existingConversation || {
      id: dmId,
      type: 'dm',
      uid: profile.uid,
      name: safeName,
      avatar: profile.photoURL || '#e63946',
      photoURL: profile.photoURL || null,
      lastMessage: 'Start the conversation',
      time: 'Now',
      unread: 0,
    };

    try {
      if (user?.uid) {
        await chatService.createOrOpenDirectConversation({
          chatId: dmId,
          sender: {
            uid: user.uid,
            displayName: userProfile?.displayName || user?.displayName || user?.email?.split('@')[0] || 'Anonymous',
            photoURL: userProfile?.photoURL || user?.photoURL || null,
          },
          recipient: {
            uid: profile.uid,
            displayName: safeName,
            photoURL: profile.photoURL || null,
          },
        });
      }

      if (!existingConversation) {
        setConversations((prev) => [directConversation, ...prev.filter((conversation) => conversation.id !== dmId)]);
      }

      setSearchQuery('');
      handleSelectConversation(directConversation);
    } catch (error) {
      console.error('Failed to open direct message:', error);
    }
  };

  const handleSelectConversation = (conv) => {
    setSelectedConversation(conv);
    setMessages(conv.type === 'room' ? ROOM_MESSAGES : []);
    setActiveTab('chat');
    if (conv.type === 'dm' && user?.uid) {
      chatService.markConversationRead(user.uid, conv.id);
    }
    navigate(`/messages/${conv.id}`, { replace: true });
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!newMessage.trim() || !selectedConversation) return;

    const messageText = newMessage;
    setNewMessage('');

    const username = userProfile?.displayName || user?.displayName || 'Anonymous';
    
    const tempMessage = {
      id: Date.now(),
      userId: user?.uid || 'me',
      username,
      message: messageText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isGif: false
    };
    
    setMessages(prev => [...prev, tempMessage]);
    
    try {
      if (selectedConversation.type === 'room') {
        await chatService.sendMessage(
          'rooms',
          selectedConversation.id,
          user?.uid || 'me',
          username,
          messageText
        );
      } else if (selectedConversation.uid && user?.uid) {
        await chatService.sendDirectMessage({
          chatId: selectedConversation.id,
          sender: {
            uid: user.uid,
            displayName: username,
            photoURL: userProfile?.photoURL || user?.photoURL || null,
          },
          recipient: {
            uid: selectedConversation.uid,
            displayName: selectedConversation.name,
            photoURL: selectedConversation.photoURL || null,
          },
          message: messageText,
        });
      }
    } catch (error) {
      console.error('Failed to send message:', error);
    }
  };

  const handleSendGif = async (gifUrl) => {
    if (!selectedConversation) return;

    const username = userProfile?.displayName || user?.displayName || 'Anonymous';
    
    const tempMessage = {
      id: Date.now(),
      userId: user?.uid || 'me',
      username,
      message: '',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isGif: true,
      gifUrl
    };
    
    setMessages(prev => [...prev, tempMessage]);
    
    try {
      if (selectedConversation.type === 'room') {
        await chatService.sendMessage(
          'rooms',
          selectedConversation.id,
          user?.uid || 'me',
          username,
          '',
          true,
          gifUrl
        );
      } else if (selectedConversation.uid && user?.uid) {
        await chatService.sendDirectMessage({
          chatId: selectedConversation.id,
          sender: {
            uid: user.uid,
            displayName: username,
            photoURL: userProfile?.photoURL || user?.photoURL || null,
          },
          recipient: {
            uid: selectedConversation.uid,
            displayName: selectedConversation.name,
            photoURL: selectedConversation.photoURL || null,
          },
          message: '',
          isGif: true,
          gifUrl,
        });
      }
    } catch (error) {
      console.error('Failed to send GIF:', error);
    }
    
    setNewMessage('');
  };

  const handleCreateRoom = async () => {
    if (!newRoomName.trim()) return;
    
    const username = userProfile?.displayName || user?.displayName || 'Anonymous';
    
    try {
      const roomId = await chatService.createRoom(newRoomName, user?.uid || 'me');
      
      const newRoom = {
        id: roomId,
        name: newRoomName,
        members: 1,
        isPublic: true,
        type: 'room',
        lastMessage: 'Room created',
        time: 'Now',
        unread: 0
      };
      
      setRooms([newRoom, ...rooms]);
      setConversations([newRoom, ...conversations]);
      setNewRoomName('');
      setShowCreateRoom(false);
      handleSelectConversation(newRoom);
    } catch (error) {
      console.error('Failed to create room:', error);
    }
  };

  const handleBack = () => {
    setSelectedConversation(null);
    setActiveTab('dms');
    navigate('/messages');
  };

  return (
    <div className="messages">
      <div className="messages-container">
        {activeTab === 'chat' && selectedConversation ? (
          <div className="chat-view">
            <header className="chat-view-header">
              <button className="back-btn" onClick={handleBack}>
                <ArrowLeft size={20} />
              </button>
              <div className="chat-view-info">
                {selectedConversation.photoURL ? (
                  <img src={selectedConversation.photoURL} alt={selectedConversation.name || 'Conversation'} className="chat-view-avatar user-result-avatar" />
                ) : (
                  <span 
                    className="chat-view-avatar"
                    style={{ background: selectedConversation.avatar }}
                  >
                    {selectedConversation.type === 'room' ? <Hash size={18} /> : (selectedConversation.name || '?').charAt(0)}
                  </span>
                )}
                <div className="chat-view-details">
                  <h2 className="chat-view-name">{selectedConversation.name || 'Conversation'}</h2>
                  {selectedConversation.type === 'room' && (
                    <span className="chat-view-meta">
                      <Users size={12} />
                      {selectedConversation.members} members
                    </span>
                  )}
                </div>
              </div>
            </header>

            <div className="chat-view-messages" ref={chatMessagesRef}>
              {messages.length === 0 && selectedConversation.type === 'dm' && (
                <div className="chat-empty-state">
                  <strong>No messages yet</strong>
                  <p>Say hi to start the conversation.</p>
                </div>
              )}
              {messages.map(msg => (
                <div 
                  key={msg.id} 
                  className={`chat-view-message ${msg.userId === user?.uid || msg.userId === 'me' ? 'own' : ''} ${msg.isGif ? 'gif-message' : ''}`}
                >
                  {msg.userId !== 'me' && (
                    <span className="message-sender">{msg.username}</span>
                  )}
                  {msg.isGif ? (
                    <img src={msg.gifUrl} alt="GIF" className="message-gif" />
                  ) : (
                    <p className="message-text">{msg.message}</p>
                  )}
                  <span className="message-time">{msg.time}</span>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>

            <form className="chat-view-input" onSubmit={handleSendMessage}>
              <button 
                type="button" 
                className="gif-toggle"
                onClick={toggleGifPicker}
              >
                GIF
              </button>
                <input
                  type="text"
                  className="input"
                  placeholder={`Message ${selectedConversation.name || 'this conversation'}`}
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                />
              <button type="submit" className="send-btn" disabled={!newMessage.trim()}>
                <Send size={20} />
              </button>
            </form>
            {isGifPickerOpen && (
              <GifPicker 
                onSelect={handleSendGif} 
                onClose={toggleGifPicker}
              />
            )}
          </div>
        ) : (
          <>
            <div className="messages-header">
              <h1 className="page-title">Messages</h1>
            </div>

            <div className="messages-tabs">
              <button 
                className={`tab-btn ${activeTab === 'dms' ? 'active' : ''}`}
                onClick={() => setActiveTab('dms')}
              >
                <MessageCircle size={18} />
                Direct
              </button>
              <button 
                className={`tab-btn ${activeTab === 'rooms' ? 'active' : ''}`}
                onClick={() => setActiveTab('rooms')}
              >
                <Users size={18} />
                Rooms
              </button>
            </div>

            <div className="search-bar">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                className="input search-input"
                placeholder={activeTab === 'dms' ? 'Search users by name or id...' : 'Search conversations...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {activeTab === 'dms' && (
              <div className="conversations-list">
                {searchQuery.trim().length >= 2 && (
                  <div className="user-search-panel">
                    <div className="user-search-header">
                      <span>Users</span>
                      <small>{searchingUsers ? 'Searching...' : `${userResults.length} found`}</small>
                    </div>
                    {userResults.map((profile) => (
                      <button
                        key={profile.uid}
                        className="conversation-item user-result-item"
                        onClick={() => openDirectMessage(profile)}
                      >
                        {profile.photoURL ? (
                          <img src={profile.photoURL} alt={profile.displayName || profile.uid} className="conv-avatar user-result-avatar" />
                        ) : (
                          <span className="conv-avatar user-result-avatar">
                            {(profile.displayName || profile.username || profile.uid || '?').charAt(0).toUpperCase()}
                          </span>
                        )}
                        <div className="conv-info">
                          <div className="conv-header">
                            <span className="conv-name">{profile.displayName || profile.username || 'Unknown user'}</span>
                            <span className="user-result-badge">Active user</span>
                          </div>
                          <p className="conv-preview">ID: {profile.uid}</p>
                        </div>
                      </button>
                    ))}
                    {!searchingUsers && !userResults.length && (
                      <div className="search-empty-state">No users match that name or id yet.</div>
                    )}
                  </div>
                )}

                  {filteredConversations.filter(c => c.type === 'dm').map(conv => (
                  <button
                    key={conv.id}
                    className="conversation-item"
                    onClick={() => handleSelectConversation(conv)}
                  >
                    {conv.photoURL ? (
                      <img src={conv.photoURL} alt={conv.name || 'Conversation'} className="conv-avatar user-result-avatar" />
                    ) : (
                      <span 
                        className="conv-avatar"
                        style={{ background: conv.avatar }}
                      >
                        {(conv.name || '?').charAt(0)}
                      </span>
                    )}
                    <div className="conv-info">
                      <div className="conv-header">
                        <span className="conv-name">{conv.name || 'Conversation'}</span>
                        <span className="conv-time">{conv.time}</span>
                      </div>
                      <p className="conv-preview">{conv.lastMessage}</p>
                      <span className={`conversation-state ${conv.unread > 0 ? 'unread' : 'read'}`}>
                        {conv.unread > 0 ? 'Unread' : 'Read'}
                      </span>
                    </div>
                    {conv.unread > 0 && (
                      <span className="unread-badge">{conv.unread}</span>
                    )}
                  </button>
                ))}
              </div>
            )}

            {activeTab === 'rooms' && (
              <div className="rooms-section">
                <button 
                  className="create-room-btn"
                  onClick={() => setShowCreateRoom(true)}
                >
                  <Plus size={20} />
                  Create Room
                </button>

                <div className="rooms-list">
                  {filteredRooms.map(room => (
                    <button
                      key={room.id}
                      className="room-item"
                      onClick={() => handleSelectConversation({...room, type: 'room', lastMessage: 'Join the conversation', time: ''})}
                    >
                      <span className="room-avatar">
                        <Hash size={18} />
                      </span>
                      <div className="room-info">
                        <span className="room-name">{room.name}</span>
                        <span className="room-members">
                          <Users size={12} />
                          {room.members} members
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {showCreateRoom && (
              <div className="modal-overlay" onClick={() => setShowCreateRoom(false)}>
                <div className="modal create-room-modal" onClick={e => e.stopPropagation()}>
                  <div className="modal-header">
                    <h3 className="modal-title">Create Room</h3>
                    <button className="modal-close" onClick={() => setShowCreateRoom(false)}>
                      <X size={20} />
                    </button>
                  </div>
                  <div className="input-group">
                    <label className="input-label">Room Name</label>
                    <input
                      type="text"
                      className="input"
                      placeholder="Enter room name"
                      value={newRoomName}
                      onChange={(e) => setNewRoomName(e.target.value)}
                      maxLength={30}
                    />
                  </div>
                  <button 
                    className="btn btn-primary btn-lg"
                    onClick={handleCreateRoom}
                    disabled={!newRoomName.trim()}
                  >
                    <Check size={18} />
                    Create
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Messages;
