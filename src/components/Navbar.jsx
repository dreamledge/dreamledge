import { NavLink, useNavigate } from 'react-router-dom';
import { useAuthStore, useUIStore } from '../stores/appStore';
import { Home, MessageCircle, User, LogOut, PlusCircle, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const { isAuthenticated, user, logout } = useAuthStore();
  const { isSidebarOpen, closeSidebar } = useUIStore();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isSidebarOpen]);

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
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-container">
          <NavLink to={isAuthenticated ? "/lobby" : "/"} className="navbar-brand">
            <Sparkles className="navbar-logo-icon" />
            <span className="navbar-logo-text">Dreamledge</span>
          </NavLink>

          {isAuthenticated && (
            <div className="navbar-links">
              {navItems.map(item => (
                <NavLink 
                  key={item.path} 
                  to={item.path} 
                  className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
                >
                  <item.icon size={20} />
                  <span>{item.label}</span>
                </NavLink>
              ))}
              <button onClick={handleLogout} className="navbar-link navbar-link-logout">
                <LogOut size={20} />
                <span>Sign Out</span>
              </button>
            </div>
          )}
        </div>
      </nav>

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
        </div>
      )}
    </>
  );
}

export default Navbar;
