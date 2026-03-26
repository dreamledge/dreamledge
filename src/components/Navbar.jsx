import { NavLink, useNavigate } from 'react-router-dom';
import { useAuthStore, useUIStore } from '../stores/appStore';
import { Home, Swords, MessageCircle, User, LogOut, Menu, X, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const { isAuthenticated, user, logout } = useAuthStore();
  const { isSidebarOpen, toggleSidebar, closeSidebar } = useUIStore();
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

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-container">
          <NavLink to={isAuthenticated ? "/lobby" : "/"} className="navbar-brand">
            <Sparkles className="navbar-logo-icon" />
            <span className="navbar-logo-text">Dreamledge</span>
          </NavLink>

          {isAuthenticated && (
            <>
              <div className="navbar-links">
                <NavLink to="/lobby" className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}>
                  <Home size={20} />
                  <span>Arena</span>
                </NavLink>
                <NavLink to="/messages" className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}>
                  <MessageCircle size={20} />
                  <span>Messages</span>
                </NavLink>
                <NavLink to="/profile" className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}>
                  <User size={20} />
                  <span>Profile</span>
                </NavLink>
                <button onClick={handleLogout} className="navbar-link navbar-link-logout">
                  <LogOut size={20} />
                  <span>Sign Out</span>
                </button>
              </div>

              <button className="navbar-mobile-toggle" onClick={toggleSidebar}>
                {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </>
          )}
        </div>
      </nav>

      {isAuthenticated && (
        <div className={`navbar-mobile-menu ${isSidebarOpen ? 'open' : ''}`}>
          <div className="navbar-mobile-links">
            <NavLink to="/lobby" className={({ isActive }) => `navbar-mobile-link ${isActive ? 'active' : ''}`} onClick={closeSidebar}>
              <Home size={24} />
              <span>Arena</span>
            </NavLink>
            <NavLink to="/messages" className={({ isActive }) => `navbar-mobile-link ${isActive ? 'active' : ''}`} onClick={closeSidebar}>
              <MessageCircle size={24} />
              <span>Messages</span>
            </NavLink>
            <NavLink to="/profile" className={({ isActive }) => `navbar-mobile-link ${isActive ? 'active' : ''}`} onClick={closeSidebar}>
              <User size={24} />
              <span>Profile</span>
            </NavLink>
            <button className="navbar-mobile-link" onClick={handleLogout}>
              <LogOut size={24} />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
