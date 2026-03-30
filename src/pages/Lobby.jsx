import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore, useBattleStore } from '../stores/appStore';
import { battleService } from '../services/battleService';
import { Swords, User, Users, Plus, Shuffle, Copy, Check, Search } from 'lucide-react';
import './Lobby.css';

function Lobby() {
  const navigate = useNavigate();
  const { user, userProfile } = useAuthStore();
  const { setUserRole, setIsHost, setCurrentBattle } = useBattleStore();
  const [roomCode, setRoomCode] = useState('');
  const [copied, setCopied] = useState(false);
  const [activeRooms, setActiveRooms] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const username = userProfile?.displayName || user?.displayName || user?.email?.split('@')[0] || 'Anonymous';

  useEffect(() => {
    const unsubscribe = battleService.subscribeToWaitingRooms((rooms) => {
      console.log('Active rooms from Firebase:', rooms);
      setActiveRooms(rooms);
    });
    
    return () => unsubscribe();
  }, []);

  const handleQuickMatch = async () => {
    if (!user) {
      alert('Please sign in first');
      return;
    }
    
    try {
      await battleService.leaveAllUserBattles(user.uid);

      const matchedRoom = await battleService.findMatch('artist', user.uid, username, userProfile?.photoURL || '');
      if (matchedRoom) {
        setUserRole(matchedRoom.role || 'artist');
        setIsHost(false);
        navigate(`/waiting/${matchedRoom.battleId}`);
        return;
      }

      const battleId = await battleService.createWaitingRoom('Random Artists', user.uid, username, 'artist', {
        photoURL: userProfile?.photoURL || '',
      });
      setUserRole('artist');
      setIsHost(true);
      navigate(`/waiting/${battleId}`);
    } catch (error) {
      console.error('Match error:', error);
      alert('Error creating room: ' + error.message);
    }
  };

  const handleRoleSelect = async (role) => {
    if (!user) {
      alert('Please sign in first');
      return;
    }
    try {
      if (role === 'artist') {
        await battleService.leaveAllUserBattles(user.uid);

        const battleId = await battleService.createWaitingRoom(
          `${username}'s Battle`,
          user.uid,
          username,
          'artist',
          { visibility: 'private', photoURL: userProfile?.photoURL || '' }
        );
        setUserRole(role);
        setIsHost(true);
        navigate(`/waiting/${battleId}`);
      } else if (role === 'judge') {
        await battleService.leaveAllUserBattles(user.uid);

        const matchedRoom = await battleService.findMatch('judge', user.uid, username, userProfile?.photoURL || '');
        if (matchedRoom) {
          setUserRole(matchedRoom.role || 'judge');
          setIsHost(false);
          navigate(`/waiting/${matchedRoom.battleId}`);
          return;
        }

        const battleId = await battleService.createWaitingRoom('Judge Queue', user.uid, username, 'judge', {
          photoURL: userProfile?.photoURL || '',
        });
        setUserRole('judge');
        setIsHost(true);
        navigate(`/waiting/${battleId}`);
      } else if (role === 'spectator') {
        await battleService.leaveAllUserBattles(user.uid);
        const match = await battleService.findSpectatorMatch(user.uid, username, userProfile?.photoURL || '');
        if (!match) {
          alert('No battles are open for spectators yet.');
          return;
        }
        setUserRole(role);
        setIsHost(false);
        navigate(`/waiting/${match.battleId}`);
      }
    } catch (error) {
      console.error('Role select error:', error);
      alert(error.message || 'Unable to join room');
    }
  };

  const handleJoinRoom = async (room) => {
    if (!user) {
      alert('Please sign in first');
      return;
    }
    
    try {
      await battleService.joinWaitingRoom(room.id, user.uid, username, 'spectator', userProfile?.photoURL || '');
      setUserRole('spectator');
      setIsHost(false);
      navigate(`/waiting/${room.id}`);
    } catch (error) {
      console.error('Join error:', error);
      alert(error.message || 'Failed to join room');
    }
  };

  const handleJoinByCode = async () => {
    if (!roomCode.trim() || !user) {
      alert('Please sign in first');
      return;
    }
    
    try {
      const result = await battleService.joinByCode(roomCode.toUpperCase(), user.uid, username, userProfile?.photoURL || '');
      setUserRole(result.role);
      setIsHost(false);
      navigate(`/waiting/${result.battleId}`);
    } catch (error) {
      console.error('Join error:', error);
      alert(error.message || 'Room not found');
    }
  };

  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const filteredRooms = activeRooms.filter(room => 
    room.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    room.id?.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
            onClick={handleQuickMatch}
          >
            <div className="role-icon">
              <Shuffle size={32} />
            </div>
            <div className="role-info">
              <h3 className="role-title">Random Artists</h3>
              <p className="role-desc">Get matched with other artists instantly</p>
            </div>
            <span className="role-badge">Play</span>
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
            onClick={() => handleRoleSelect('artist')}
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
              onClick={() => roomCode.length >= 4 && handleJoinByCode()}
              disabled={roomCode.length < 4}
            >
              Join Room
            </button>
          </div>
        </div>

        <section className="active-rooms">
          <div className="section-header">
            <h2 className="section-title">Active Battles</h2>
            <div className="search-box">
              <Search size={16} />
              <input
                type="text"
                placeholder="Search rooms..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="rooms-list">
            {filteredRooms.length === 0 ? (
              <p className="no-rooms">No active battles. Create one or join with a code!</p>
            ) : (
              filteredRooms.map(room => {
                const playerCount = ['artistA', 'artistB', 'judge1', 'judge2'].filter((slot) => room[slot]).length;
                return (
                  <button 
                    key={room.id} 
                    className="room-card"
                    onClick={() => handleJoinRoom(room)}
                  >
                    <div className="room-info">
                      <h3 className="room-name">{room.name}</h3>
                      <div className="room-meta">
                        <span className="room-players">
                          <Users size={14} />
                          {playerCount} / {room.maxPlayers || 2} players
                        </span>
                        <span className={`room-status ${room.status}`}>
                          {room.status === 'waiting' ? 'Waiting' : 'Ready'}
                        </span>
                      </div>
                    </div>
                    <div className="room-code">
                      <span>{room.id}</span>
                      <button 
                        className="copy-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCopyCode(room.id);
                        }}
                      >
                        {copied ? <Check size={14} /> : <Copy size={14} />}
                      </button>
                    </div>
                  </button>
                );
              })
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Lobby;
