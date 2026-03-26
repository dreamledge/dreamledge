import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore, useBattleStore } from '../stores/appStore';
import { Swords, User, Users, Plus, Shuffle, Copy, Check } from 'lucide-react';
import './Lobby.css';

function Lobby() {
  const navigate = useNavigate();
  const { user, userProfile } = useAuthStore();
  const { setUserRole, setIsHost } = useBattleStore();
  const [roomCode, setRoomCode] = useState('');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeRooms, setActiveRooms] = useState([
    { id: '1', name: '🔥 Hot Bars Only', players: 4, status: 'waiting' },
    { id: '2', name: 'Underground Battles', players: 6, status: 'active' },
    { id: '3', name: 'New Artist Showcase', players: 3, status: 'waiting' },
  ]);

  const generateRoomCode = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  };

  const handleRoleSelect = (role) => {
    setUserRole(role);
    const roomId = generateRoomCode();
    setIsHost(role === 'artist');
    navigate(`/waiting/${roomId}`);
  };

  const handleJoinRoom = (roomId) => {
    setUserRole('spectator');
    navigate(`/waiting/${roomId}`);
  };

  const handleCreateRoom = () => {
    const roomId = generateRoomCode();
    setIsHost(true);
    setUserRole('artist');
    navigate(`/waiting/${roomId}`);
  };

  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="lobby">
      <div className="lobby-container">
        <header className="lobby-header">
          <h1 className="page-title">Choose Your Path</h1>
          <p className="lobby-subtitle">
            Pick your role and enter the arena
          </p>
        </header>

        <div className="role-grid">
          <button 
            className="role-card role-artist"
            onClick={() => handleRoleSelect('artist')}
          >
            <div className="role-icon">
              <Swords size={32} />
            </div>
            <div className="role-info">
              <h3 className="role-title">Random Artist Battle</h3>
              <p className="role-desc">Enter the arena as an artist and compete</p>
            </div>
            <span className="role-badge">Compete</span>
          </button>

          <button 
            className="role-card role-judge"
            onClick={() => handleRoleSelect('judge')}
          >
            <div className="role-icon">
              <User size={32} />
            </div>
            <div className="role-info">
              <h3 className="role-title">Random Judge</h3>
              <p className="role-desc">Evaluate and vote on performances</p>
            </div>
            <span className="role-badge">Judge</span>
          </button>

          <button 
            className="role-card role-spectator"
            onClick={() => handleRoleSelect('spectator')}
          >
            <div className="role-icon">
              <Users size={32} />
            </div>
            <div className="role-info">
              <h3 className="role-title">Random Spectator</h3>
              <p className="role-desc">Watch battles and vote for favorites</p>
            </div>
            <span className="role-badge">Watch</span>
          </button>

          <button 
            className="role-card role-create"
            onClick={handleCreateRoom}
          >
            <div className="role-icon">
              <Plus size={32} />
            </div>
            <div className="role-info">
              <h3 className="role-title">Create Battle</h3>
              <p className="role-desc">Host your own private battle room</p>
            </div>
            <span className="role-badge">Host</span>
          </button>
        </div>

        <div className="join-room">
          <h2 className="section-title">Join with Code</h2>
          <div className="join-form">
            <input
              type="text"
              className="input room-input"
              placeholder="Enter room code"
              value={roomCode}
              onChange={(e) => setRoomCode(e.target.value.toUpperCase())}
              maxLength={6}
            />
            <button 
              className="btn btn-primary"
              onClick={() => roomCode.length >= 4 && handleJoinRoom(roomCode)}
              disabled={roomCode.length < 4}
            >
              Join Room
            </button>
          </div>
        </div>

        <section className="active-rooms">
          <h2 className="section-title">Active Battles</h2>
          <div className="rooms-list">
            {activeRooms.map(room => (
              <button 
                key={room.id} 
                className="room-card"
                onClick={() => handleJoinRoom(room.id)}
              >
                <div className="room-info">
                  <h3 className="room-name">{room.name}</h3>
                  <div className="room-meta">
                    <span className="room-players">
                      <Users size={14} />
                      {room.players} online
                    </span>
                    <span className={`room-status ${room.status}`}>
                      {room.status === 'waiting' ? 'Waiting' : 'Live'}
                    </span>
                  </div>
                </div>
                <div className="room-action">
                  <Shuffle size={18} />
                </div>
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Lobby;
