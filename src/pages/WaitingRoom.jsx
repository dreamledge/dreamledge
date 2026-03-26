import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuthStore, useBattleStore, useUIStore } from '../stores/appStore';
import { chatService } from '../services/chatService';
import { Mic, Gavel, Users, Copy, Check, Send, X, Video, VideoOff, MicOff, Mic as MicOn } from 'lucide-react';
import GifPicker from '../components/GifPicker';
import './WaitingRoom.css';

const DEMO_PARTICIPANTS = [
  { id: '1', name: 'MC_Flow', role: 'artist', isReady: true, hasVideo: true, hasAudio: true },
  { id: '2', name: 'LyricQueen', role: 'artist', isReady: true, hasVideo: true, hasAudio: false },
  { id: '3', name: 'Judge_Dave', role: 'judge', isReady: true, hasVideo: true, hasAudio: true },
  { id: '4', name: 'Judge_Maya', role: 'judge', isReady: false, hasVideo: false, hasAudio: true },
];

function WaitingRoom() {
  const { roomId } = useParams();
  const navigate = useNavigate();
  const { user, userProfile } = useAuthStore();
  const { userRole, isHost, setParticipants } = useBattleStore();
  const { isGifPickerOpen, toggleGifPicker, closeGifPicker } = useUIStore();
  const [participants, setLocalParticipants] = useState(DEMO_PARTICIPANTS);
  const [chatMessages, setChatMessages] = useState([
    { id: 1, userId: '1', username: 'MC_Flow', message: 'Ready to drop some heat! 🔥', time: '2:30 PM' },
    { id: 2, userId: '3', username: 'Judge_Dave', message: 'Let\'s see what you got', time: '2:31 PM' },
    { id: 3, userId: '2', username: 'LyricQueen', message: 'GGs in advance 😤', time: '2:32 PM' },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [copied, setCopied] = useState(false);
  const [cameraOn, setCameraOn] = useState(true);
  const [micOn, setMicOn] = useState(true);
  const [isStarting, setIsStarting] = useState(false);
  const chatEndRef = useRef(null);

  const canStart = participants.filter(p => p.role === 'artist' && p.isReady).length >= 2 &&
                   participants.filter(p => p.role === 'judge').length >= 2;

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  useEffect(() => {
    if (!roomId) return;
    
    const unsubscribe = chatService.subscribeToMessages('waitingRooms', roomId, (realTimeMessages) => {
      if (realTimeMessages.length > 0) {
        setChatMessages(realTimeMessages);
      }
    });
    
    return () => unsubscribe();
  }, [roomId]);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(roomId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!newMessage.trim() || !roomId) return;

    const username = userProfile?.username || user?.displayName || 'Anonymous';
    
    const tempMessage = {
      id: Date.now(),
      userId: user?.uid || 'me',
      username,
      message: newMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setChatMessages(prev => [...prev, tempMessage]);
    
    try {
      await chatService.sendMessage(
        'waitingRooms',
        roomId,
        user?.uid || 'me',
        username,
        newMessage
      );
    } catch (error) {
      console.error('Failed to send message:', error);
    }
    
    setNewMessage('');
  };

  const handleSendGif = async (gifUrl) => {
    if (!roomId) return;

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
    
    setChatMessages(prev => [...prev, tempMessage]);
    
    try {
      await chatService.sendMessage(
        'waitingRooms',
        roomId,
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
    closeGifPicker();
  };

  const handleStartBattle = () => {
    if (!canStart) return;
    setIsStarting(true);
    setTimeout(() => {
      navigate(`/arena/${roomId}`);
    }, 1500);
  };

  const getRoleIcon = (role) => {
    switch (role) {
      case 'artist': return <Mic size={14} />;
      case 'judge': return <Gavel size={14} />;
      default: return <Users size={14} />;
    }
  };

  const readyCount = participants.filter(p => p.isReady).length;
  const artistCount = participants.filter(p => p.role === 'artist').length;
  const judgeCount = participants.filter(p => p.role === 'judge').length;

  return (
    <div className="waiting-room">
      <div className="waiting-container">
        <header className="waiting-header">
          <div className="room-code-display">
            <span className="room-label">Room Code</span>
            <div className="room-code-row">
              <span className="room-code">{roomId}</span>
              <button className="copy-btn" onClick={handleCopyCode}>
                {copied ? <Check size={18} /> : <Copy size={18} />}
              </button>
            </div>
          </div>
          <div className="waiting-status">
            <div className="status-item">
              <span className="status-value">{artistCount}/2</span>
              <span className="status-label">Artists</span>
            </div>
            <div className="status-item">
              <span className="status-value">{judgeCount}/2</span>
              <span className="status-label">Judges</span>
            </div>
            <div className="status-item">
              <span className="status-value">{readyCount}</span>
              <span className="status-label">Ready</span>
            </div>
          </div>
        </header>

        <div className="waiting-content">
          <section className="video-section">
            <h2 className="section-title">Waiting for Players</h2>
            <div className="video-grid">
              {[...Array(4)].map((_, i) => {
                const participant = participants[i];
                return (
                  <div key={i} className={`video-box ${participant ? 'has-participant' : 'empty'}`}>
                    {participant ? (
                      <>
                        <div className="video-placeholder">
                          <div className="avatar-placeholder">
                            {participant.name.charAt(0)}
                          </div>
                        </div>
                        <div className="video-overlay">
                          <div className="participant-info">
                            <span className={`role-badge-small badge-${participant.role}`}>
                              {getRoleIcon(participant.role)}
                              {participant.role}
                            </span>
                            <span className="participant-name">{participant.name}</span>
                          </div>
                          <div className="media-indicators">
                            {!participant.hasAudio && <MicOff size={14} />}
                            {!participant.hasVideo && <VideoOff size={14} />}
                          </div>
                        </div>
                        {participant.isReady && (
                          <div className="ready-indicator">Ready</div>
                        )}
                      </>
                    ) : (
                      <div className="empty-slot">
                        <Users size={32} />
                        <span>Waiting...</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="media-controls">
              <button 
                className={`control-btn ${micOn ? 'active' : 'off'}`}
                onClick={() => setMicOn(!micOn)}
              >
                {micOn ? <MicOn size={20} /> : <MicOff size={20} />}
              </button>
              <button 
                className={`control-btn ${cameraOn ? 'active' : 'off'}`}
                onClick={() => setCameraOn(!cameraOn)}
              >
                {cameraOn ? <Video size={20} /> : <VideoOff size={20} />}
              </button>
              <button className="control-btn leave" onClick={() => navigate('/lobby')}>
                <X size={20} />
              </button>
            </div>
          </section>

          <aside className="chat-section">
            <div className="chat-header">
              <h3>Waiting Room Chat</h3>
            </div>
            <div className="chat-messages">
              {chatMessages.map(msg => (
                <div 
                  key={msg.id} 
                  className={`chat-message ${msg.userId === user?.uid ? 'own' : ''} ${msg.isGif ? 'gif-message' : ''}`}
                >
                  <div className="message-header">
                    <span className="message-username">{msg.username}</span>
                    <span className="message-time">{msg.time}</span>
                  </div>
                  {msg.isGif ? (
                    <img src={msg.gifUrl} alt="GIF" className="message-gif" />
                  ) : (
                    <p className="message-content">{msg.message}</p>
                  )}
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>
            <form className="chat-input-form" onSubmit={handleSendMessage}>
              <button 
                type="button" 
                className="gif-toggle"
                onClick={toggleGifPicker}
              >
                GIF
              </button>
              <input
                type="text"
                className="input chat-input"
                placeholder="Say something..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
              <button type="submit" className="send-btn" disabled={!newMessage.trim()}>
                <Send size={18} />
              </button>
            </form>
            {isGifPickerOpen && (
              <GifPicker 
                onSelect={handleSendGif} 
                onClose={toggleGifPicker}
              />
            )}
          </aside>
        </div>

        {isHost && (
          <div className="start-section">
            <button 
              className="btn btn-primary btn-lg start-btn"
              onClick={handleStartBattle}
              disabled={!canStart || isStarting}
            >
              {isStarting ? 'Starting...' : 'Start Battle'}
            </button>
            {!canStart && (
              <p className="start-hint">
                Need 2 artists and 2 judges ready to start
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default WaitingRoom;
