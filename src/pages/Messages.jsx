import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuthStore, useUIStore } from '../stores/appStore';
import { chatService } from '../services/chatService';
import { Search, Plus, Send, Users, MessageCircle, Hash, ArrowLeft, X, Check } from 'lucide-react';
import GifPicker from '../components/GifPicker';
import './Messages.css';

const DEMO_CONVERSATIONS = [
  { id: '1', type: 'dm', name: 'MC_Flow', avatar: '#e63946', lastMessage: 'GG last battle!', time: '2:30 PM', unread: 2 },
  { id: '2', type: 'dm', name: 'Judge_Dave', avatar: '#2ecc71', lastMessage: 'Your flow was clean', time: '1:15 PM', unread: 0 },
  { id: '3', type: 'room', name: 'Battle Lounge', avatar: '#3498db', lastMessage: 'Who\'s ready for the next battle?', time: '12:45 PM', unread: 5, members: 24 },
  { id: '4', type: 'room', name: 'Underground Cypher', avatar: '#9b59b6', lastMessage: 'New track just dropped!', time: 'Yesterday', unread: 0, members: 156 },
];

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
  const [conversations, setConversations] = useState(DEMO_CONVERSATIONS);
  const [rooms, setRooms] = useState(DEMO_ROOMS);
  const [activeTab, setActiveTab] = useState(conversationId ? 'chat' : 'dms');
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [showCreateRoom, setShowCreateRoom] = useState(false);
  const [newRoomName, setNewRoomName] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (conversationId) {
      const conv = conversations.find(c => c.id === conversationId);
      if (conv) {
        setSelectedConversation(conv);
        setMessages(conv.type === 'room' ? ROOM_MESSAGES : DEMO_MESSAGES);
        setActiveTab('chat');
      }
    }
  }, [conversationId, conversations]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (!selectedConversation) return;
    
    const chatType = selectedConversation.type === 'room' ? 'rooms' : 'dms';
    const chatId = selectedConversation.id;
    
    const unsubscribe = chatService.subscribeToMessages(chatType, chatId, (realTimeMessages) => {
      if (realTimeMessages.length > 0) {
        setMessages(realTimeMessages);
        setIsConnected(true);
      } else {
        setIsConnected(false);
      }
    });
    
    return () => unsubscribe();
  }, [selectedConversation]);

  const filteredConversations = conversations.filter(c => 
    c.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredRooms = rooms.filter(r => 
    r.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectConversation = (conv) => {
    setSelectedConversation(conv);
    setMessages(conv.type === 'room' ? ROOM_MESSAGES : DEMO_MESSAGES);
    setActiveTab('chat');
    navigate(`/messages/${conv.id}`, { replace: true });
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!newMessage.trim() || !selectedConversation) return;

    const messageText = newMessage;
    setNewMessage('');

    const chatType = selectedConversation.type === 'room' ? 'rooms' : 'dms';
    const username = userProfile?.username || user?.displayName || 'Anonymous';
    
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
      await chatService.sendMessage(
        chatType,
        selectedConversation.id,
        user?.uid || 'me',
        username,
        messageText
      );
    } catch (error) {
      console.error('Failed to send message:', error);
    }
  };

  const handleSendGif = async (gifUrl) => {
    if (!selectedConversation) return;

    const chatType = selectedConversation.type === 'room' ? 'rooms' : 'dms';
    const username = userProfile?.username || user?.displayName || 'Anonymous';
    
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
      await chatService.sendMessage(
        chatType,
        selectedConversation.id,
        user?.uid || 'me',
        username,
        '',
        true,
        gifUrl
      );
    } catch (error) {
      console.error('Failed to send GIF:', error);
    }
    
    setNewMessage('');
  };

  const handleCreateRoom = async () => {
    if (!newRoomName.trim()) return;
    
    const username = userProfile?.username || user?.displayName || 'Anonymous';
    
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
                <span 
                  className="chat-view-avatar"
                  style={{ background: selectedConversation.avatar }}
                >
                  {selectedConversation.type === 'room' ? <Hash size={18} /> : selectedConversation.name.charAt(0)}
                </span>
                <div className="chat-view-details">
                  <h2 className="chat-view-name">{selectedConversation.name}</h2>
                  {selectedConversation.type === 'room' && (
                    <span className="chat-view-meta">
                      <Users size={12} />
                      {selectedConversation.members} members
                    </span>
                  )}
                </div>
              </div>
            </header>

            <div className="chat-view-messages">
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
                placeholder={`Message ${selectedConversation.name}`}
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
                placeholder="Search conversations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {activeTab === 'dms' && (
              <div className="conversations-list">
                {filteredConversations.filter(c => c.type === 'dm').map(conv => (
                  <button
                    key={conv.id}
                    className="conversation-item"
                    onClick={() => handleSelectConversation(conv)}
                  >
                    <span 
                      className="conv-avatar"
                      style={{ background: conv.avatar }}
                    >
                      {conv.name.charAt(0)}
                    </span>
                    <div className="conv-info">
                      <div className="conv-header">
                        <span className="conv-name">{conv.name}</span>
                        <span className="conv-time">{conv.time}</span>
                      </div>
                      <p className="conv-preview">{conv.lastMessage}</p>
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
