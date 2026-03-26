import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuthStore, useBattleStore, useUIStore } from '../stores/appStore';
import { chatService } from '../services/chatService';
import { Mic, Gavel, Users, Copy, Check, Send, X, Video, VideoOff, MicOff, Timer, Trophy, Volume2, Play, Pause, Heart } from 'lucide-react';
import GifPicker from '../components/GifPicker';
import './Arena.css';

const DEMO_BATTLE = {
  id: '1',
  phase: 'performance',
  round: 1,
  currentArtist: 1,
  timeRemaining: 180,
  artist1: { id: '1', name: 'MC_Flow', votes: 2, isPlaying: true },
  artist2: { id: '2', name: 'LyricQueen', votes: 1, isPlaying: false },
};

function Arena() {
  const { battleId } = useParams();
  const navigate = useNavigate();
  const { user, userProfile } = useAuthStore();
  const { userRole } = useBattleStore();
  const { isGifPickerOpen, toggleGifPicker, closeGifPicker } = useUIStore();
  const [battle, setBattle] = useState(DEMO_BATTLE);
  const [chatMessages, setChatMessages] = useState([
    { id: 1, userId: '1', username: 'MC_Flow', message: 'Let\'s gooo! 🔥', time: '2:35 PM', isGif: false },
    { id: 2, userId: '3', username: 'Spectator_1', message: 'This is insane!', time: '2:35 PM', isGif: false },
    { id: 3, userId: '4', username: 'Judge_Maya', message: 'That flow was clean', time: '2:36 PM', isGif: false },
    { id: 4, userId: '5', username: 'FanBoy', message: '', time: '2:36 PM', isGif: true, gifUrl: 'https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif' },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [micOn, setMicOn] = useState(false);
  const [cameraOn, setCameraOn] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(80);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  useEffect(() => {
    if (!battleId) return;
    
    const unsubscribe = chatService.subscribeToMessages('arenas', battleId, (realTimeMessages) => {
      if (realTimeMessages.length > 0) {
        setChatMessages(realTimeMessages);
      }
    });
    
    return () => unsubscribe();
  }, [battleId]);

  useEffect(() => {
    const timer = setInterval(() => {
      setBattle(prev => {
        if (prev.timeRemaining > 0) {
          return { ...prev, timeRemaining: prev.timeRemaining - 1 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!newMessage.trim() || !battleId) return;

    const messageText = newMessage;
    setNewMessage('');

    const username = userProfile?.username || user?.displayName || 'Anonymous';
    
    const tempMessage = {
      id: Date.now(),
      userId: user?.uid || 'me',
      username,
      message: messageText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isGif: false
    };
    
    setChatMessages(prev => [...prev, tempMessage]);
    
    try {
      await chatService.sendMessage(
        'arenas',
        battleId,
        user?.uid || 'me',
        username,
        messageText
      );
    } catch (error) {
      console.error('Failed to send message:', error);
    }
  };

  const handleSendGif = async (gifUrl) => {
    if (!battleId) return;

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
        'arenas',
        battleId,
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

  const getPhaseLabel = (phase) => {
    switch (phase) {
      case 'waiting': return 'Waiting';
      case 'preparing': return 'Preparing';
      case 'submission': return 'Submit Track';
      case 'performance': return 'Performance';
      case 'voting': return 'Voting';
      case 'results': return 'Results';
      default: return phase;
    }
  };

  const currentArtist = battle.currentArtist === 1 ? battle.artist1 : battle.artist2;
  const totalVotes = battle.artist1.votes + battle.artist2.votes;

  return (
    <div className="arena">
      <div className="arena-container">
        <header className="arena-header">
          <div className="battle-info">
            <span className="battle-phase">{getPhaseLabel(battle.phase)}</span>
            <span className="battle-divider">•</span>
            <span className="battle-round">Round {battle.round}</span>
          </div>
          <div className={`timer ${battle.timeRemaining <= 30 ? 'urgent' : ''}`}>
            <Timer size={18} />
            <span>{formatTime(battle.timeRemaining)}</span>
          </div>
        </header>

        <div className="arena-content">
          <section className="arena-main">
            <div className="video-grid">
              <div className={`video-box artist ${battle.currentArtist === 1 ? 'active' : ''}`}>
                <div className="video-content">
                  <div className="avatar-large">
                    <Mic size={40} />
                  </div>
                </div>
                <div className="video-info">
                  <span className="artist-name">{battle.artist1.name}</span>
                  <div className="artist-stats">
                    <span className="vote-count">
                      <Heart size={14} />
                      {battle.artist1.votes}
                    </span>
                    {battle.currentArtist === 1 && isPlaying && (
                      <span className="playing-indicator">
                        <Volume2 size={14} />
                        Playing
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className={`video-box artist ${battle.currentArtist === 2 ? 'active' : ''}`}>
                <div className="video-content">
                  <div className="avatar-large">
                    <Mic size={40} />
                  </div>
                </div>
                <div className="video-info">
                  <span className="artist-name">{battle.artist2.name}</span>
                  <div className="artist-stats">
                    <span className="vote-count">
                      <Heart size={14} />
                      {battle.artist2.votes}
                    </span>
                    {battle.currentArtist === 2 && isPlaying && (
                      <span className="playing-indicator">
                        <Volume2 size={14} />
                        Playing
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="video-box judge">
                <div className="video-content">
                  <div className="avatar-large judge">
                    <Gavel size={32} />
                  </div>
                </div>
                <div className="video-info">
                  <span className="artist-name">Judge_Dave</span>
                </div>
              </div>

              <div className="video-box judge">
                <div className="video-content">
                  <div className="avatar-large judge">
                    <Gavel size={32} />
                  </div>
                </div>
                <div className="video-info">
                  <span className="artist-name">Judge_Maya</span>
                </div>
              </div>
            </div>

            <div className="arena-controls">
              <div className="playback-controls">
                <button 
                  className={`control-btn large ${isPlaying ? 'active' : ''}`}
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                </button>
                <div className="volume-control">
                  <Volume2 size={18} />
                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    value={volume}
                    onChange={(e) => setVolume(e.target.value)}
                    className="volume-slider"
                  />
                </div>
              </div>
              
              <div className="media-controls">
                <button 
                  className={`control-btn ${micOn ? 'active' : 'off'}`}
                  onClick={() => setMicOn(!micOn)}
                >
                  {micOn ? <Mic size={20} /> : <MicOff size={20} />}
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
            </div>

            <div className="vote-bar">
              <div className="vote-track">
                <div className="vote-progress" style={{ width: `${(battle.artist1.votes / Math.max(totalVotes, 1)) * 100}%` }}></div>
              </div>
              <div className="vote-labels">
                <span>{battle.artist1.name}</span>
                <span className="vs">VS</span>
                <span>{battle.artist2.name}</span>
              </div>
            </div>
          </section>

          <aside className="chat-section arena-chat">
            <div className="chat-header">
              <h3>Live Crowd</h3>
              <span className="viewer-count">
                <Users size={14} />
                24 watching
              </span>
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
      </div>
    </div>
  );
}

export default Arena;
