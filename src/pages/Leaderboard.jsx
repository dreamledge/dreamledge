import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../stores/appStore';
import { Trophy, Medal, Crown, TrendingUp, Zap, Users } from 'lucide-react';
import './Leaderboard.css';

const DEMO_LEADERBOARD = [
  { id: '1', username: 'MC_Flow', points: 2450, wins: 72, avatar: '#e63946', joinedAt: '2024-01-15' },
  { id: '2', username: 'LyricQueen', points: 2380, wins: 69, avatar: '#9b59b6', joinedAt: '2024-01-18' },
  { id: '3', username: 'BeatMaker99', points: 1890, wins: 44, avatar: '#2ecc71', joinedAt: '2024-02-01' },
  { id: '4', username: 'FlowMaster', points: 1650, wins: 32, avatar: '#3498db', joinedAt: '2024-02-10' },
  { id: '5', username: 'RhymeStar', points: 1420, wins: 21, avatar: '#f39c12', joinedAt: '2024-02-20' },
  { id: '6', username: 'MicDropper', points: 1280, wins: 14, avatar: '#1abc9c', joinedAt: '2024-03-01' },
  { id: '7', username: 'VerseKing', points: 1150, wins: 7, avatar: '#e74c3c', joinedAt: '2024-03-05' },
  { id: '8', username: 'CypherSoul', points: 1080, wins: 4, avatar: '#34495e', joinedAt: '2024-03-08' },
  { id: '9', username: 'BattleBorn', points: 1050, wins: 2, avatar: '#16a085', joinedAt: '2024-03-12' },
  { id: '10', username: 'NewEntry', points: 1000, wins: 0, avatar: '#8e44ad', joinedAt: '2024-03-15' },
];

function Leaderboard() {
  const navigate = useNavigate();
  const { user, userProfile, isAuthenticated } = useAuthStore();
  const [leaderboard, setLeaderboard] = useState([]);
  const [userRank, setUserRank] = useState(null);

  useEffect(() => {
    // Sort by points desc, then by join date asc for tiebreaker
    const sorted = [...DEMO_LEADERBOARD].sort((a, b) => {
      if (b.points !== a.points) return b.points - a.points;
      return new Date(a.joinedAt) - new Date(b.joinedAt);
    });
    setLeaderboard(sorted);

    // Find user's rank if they're in the leaderboard
    if (user) {
      const rank = sorted.findIndex(u => u.id === user?.uid);
      if (rank >= 0) {
        setUserRank(rank + 1);
      }
    }
  }, [user]);

  const getRankIcon = (index) => {
    switch (index) {
      case 0: return <Crown size={20} className="rank-icon gold" />;
      case 1: return <Medal size={20} className="rank-icon silver" />;
      case 2: return <Medal size={20} className="rank-icon bronze" />;
      default: return <span className="rank-number">{index + 1}</span>;
    }
  };

  const getInitials = (name) => {
    return name?.charAt(0).toUpperCase() || '?';
  };

  return (
    <div className="leaderboard-page">
      <div className="leaderboard-container">
        <header className="leaderboard-header">
          <div className="header-content">
            <Trophy size={32} className="header-icon" />
            <h1 className="page-title">Leaderboard</h1>
          </div>
          <p className="header-subtitle">Top performers in the arena</p>
        </header>

        {userRank && (
          <div className="your-rank-card">
            <div className="your-rank-info">
              <span className="your-rank-label">Your Rank</span>
              <span className="your-rank-number">#{userRank}</span>
            </div>
            <div className="your-stats">
              <div className="stat">
                <Zap size={16} className="stat-icon" />
                <span className="stat-value">{userProfile?.points || 1000}</span>
                <span className="stat-label">Points</span>
              </div>
            </div>
          </div>
        )}

        <div className="leaderboard-list">
          {leaderboard.map((entry, index) => (
            <div 
              key={entry.id} 
              className={`leaderboard-card ${index < 3 ? 'top-three' : ''} ${entry.id === user?.uid ? 'current-user' : ''}`}
            >
              <div className="rank-position">
                {getRankIcon(index)}
              </div>
              
              <div 
                className="user-avatar"
                style={{ background: entry.avatar }}
              >
                {getInitials(entry.username)}
              </div>
              
              <div className="user-info">
                <span className="username">{entry.username}</span>
                <span className="wins">{entry.wins} wins</span>
              </div>
              
              <div className="user-points">
                <span className="points-value">{entry.points.toLocaleString()}</span>
                <span className="points-label">pts</span>
              </div>
            </div>
          ))}
        </div>

        <div className="leaderboard-info">
          <div className="info-item">
            <TrendingUp size={16} />
            <span>+20 points per win</span>
          </div>
          <div className="info-item">
            <Zap size={16} />
            <span>+1000 points for joining</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;