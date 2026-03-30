import { useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useAuthStore, useUIStore } from '../stores/appStore';
import { Home, MessageCircle, User, LogOut, Trophy } from 'lucide-react';
import { chatService } from '../services/chatService';
import './Navbar.css';

function Navbar() {
  const { isAuthenticated, logout, user } = useAuthStore();
  const { closeSidebar } = useUIStore();
  const navigate = useNavigate();
  const location = useLocation();
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    if (!user?.uid || !isAuthenticated) {
      setUnreadCount(0);
      return undefined;
    }

    const unsubscribe = chatService.subscribeToUnreadCount(user.uid, setUnreadCount);
    return () => unsubscribe();
  }, [isAuthenticated, user?.uid]);

  const handleLogout = () => {
    logout();
    navigate('/');
    closeSidebar();
  };

  const navItems = [
    { path: '/lobby', icon: Home, label: 'Arena' },
    { path: '/leaderboard', icon: Trophy, label: 'Rank' },
    { path: '/messages', icon: MessageCircle, label: 'Messages' },
    { path: '/profile', icon: User, label: 'Profile' },
  ];

  if (!isAuthenticated || location.pathname === '/') {
    return null;
  }

  return (
    <>
      <div className="mobile-nav">
        {navItems.map(item => (
          <NavLink 
            key={item.path} 
            to={item.path} 
            className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`}
          >
            {item.path === '/messages' && unreadCount > 0 && <span className="nav-unread-dot" />}
            <item.icon size={24} />
            <span>{item.label}</span>
          </NavLink>
        ))}
        <button onClick={handleLogout} className="mobile-nav-item mobile-logout">
          <LogOut size={24} />
          <span>Out</span>
        </button>
      </div>
    </>
  );
}

export default Navbar;
