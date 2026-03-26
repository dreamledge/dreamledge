import { NavLink, useNavigate } from 'react-router-dom';
import { useAuthStore, useUIStore } from '../stores/appStore';
import { Home, MessageCircle, User, LogOut, Sparkles } from 'lucide-react';
import './Navbar.css';

function Navbar() {
  const { isAuthenticated, logout } = useAuthStore();
  const { closeSidebar } = useUIStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
    closeSidebar();
  };

  const navItems = [
    { path: '/lobby', icon: Home, label: 'Arena' },
    { path: '/messages', icon: MessageCircle, label: 'Messages' },
    { path: '/profile', icon: User, label: 'Profile' },
  ];

  return (
    <>
      {isAuthenticated && (
        <div className="mobile-nav">
          {navItems.map(item => (
            <NavLink 
              key={item.path} 
              to={item.path} 
              className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`}
            >
              <item.icon size={24} />
              <span>{item.label}</span>
            </NavLink>
          ))}
          <button onClick={handleLogout} className="mobile-nav-item mobile-logout">
            <LogOut size={24} />
            <span>Sign Out</span>
          </button>
        </div>
      )}
    </>
  );
}

export default Navbar;
