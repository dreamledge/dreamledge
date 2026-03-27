import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../stores/appStore';
import { userService } from '../services/userService';
import { Sparkles, Swords, Users, Mic, Gavel, Eye, ArrowRight, Mail, Lock, User, Trophy } from 'lucide-react';
import './Home.css';

function Home() {
  const navigate = useNavigate();
  const { user, setUser, setUserProfile, setLoading, isAuthenticated } = useAuthStore();
  const [loading, setLoadingState] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: '',
  });

  useEffect(() => {
    if (isAuthenticated && user && !isLoading) {
      navigate('/lobby', { replace: true });
    }
  }, [isAuthenticated, user, isLoading, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoadingState(true);

    if (!formData.email.trim()) {
      setError('Email is required');
      setLoadingState(false);
      return;
    }

    if (!formData.password.trim()) {
      setError('Password is required');
      setLoadingState(false);
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      setLoadingState(false);
      return;
    }

    try {
      if (showSignIn) {
        // Sign in - look up existing user by email
        const existingProfile = await userService.getUserByEmail(formData.email);
        
        if (!existingProfile) {
          setError('No account found with this email. Create an account first.');
          setLoadingState(false);
          return;
        }

        setUser({
          uid: existingProfile.uid,
          email: existingProfile.email,
          displayName: existingProfile.displayName,
          photoURL: existingProfile.photoURL,
        });
        setUserProfile(existingProfile);
        setLoadingState(false);
        navigate('/lobby');
      } else {
        // Sign up - create new user
        if (!formData.username.trim()) {
          setError('Username is required');
          setLoadingState(false);
          return;
        }

        const userId = `user_${Date.now()}`;
        const newUser = {
          uid: userId,
          email: formData.email,
          displayName: formData.username,
          photoURL: null,
        };
        
        const userProfile = await userService.createOrUpdateUser(newUser);
        
        setUser(newUser);
        setUserProfile(userProfile);
        setLoadingState(false);
        navigate('/lobby');
      }
    } catch (err) {
      console.error('Auth error:', err);
      setError('Failed to process request. Please try again.');
      setLoadingState(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  return (
    <div className="home">
      <div className="home-background">
        <div className="bg-gradient-1"></div>
        <div className="bg-gradient-2"></div>
        <div className="bg-grid"></div>
        <div className="bg-glow"></div>
      </div>

      <header className="home-header">
        <div className="home-logo">
          <img src="/logo.png" alt="Dreamledge" className="logo-img" />
        </div>
        <button className="header-leaderboard" onClick={() => navigate('/leaderboard')}>
          <Trophy size={18} />
          <span>Rankings</span>
        </button>
      </header>

      <main className="home-main">
        <section className="hero">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-dot"></span>
              Live Battle Arena
            </div>
            <h1 className="hero-title">
              Where Artists
              <span className="hero-title-accent"> Battle </span>
              for Glory
            </h1>
            <p className="hero-subtitle">
              Experience the thrill of live rap battles. Watch artists compete, 
              judges critique, and the crowd decides the winner.
            </p>
            <div className="hero-actions">
              <button 
                className="btn btn-primary btn-lg" 
                onClick={() => {
                  setShowSignIn(false);
                  document.getElementById('join-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get Started
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          <div className="hero-visual">
            <div className="battle-preview">
              <div className="preview-card artist-1">
                <div className="preview-avatar">
                  <Mic size={32} />
                </div>
                <span className="preview-label">Artist</span>
              </div>
              <div className="preview-vs">VS</div>
              <div className="preview-card artist-2">
                <div className="preview-avatar">
                  <Mic size={32} />
                </div>
                <span className="preview-label">Artist</span>
              </div>
            </div>
          </div>
        </section>

        <section className="features">
          <div className="feature-card">
            <div className="feature-icon artist">
              <Mic size={28} />
            </div>
            <h3 className="feature-title">Artists</h3>
            <p className="feature-desc">
              Upload your tracks and battle head-to-head. Show your flow, lyrics, and stage presence.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon judge">
              <Gavel size={28} />
            </div>
            <h3 className="feature-title">Judges</h3>
            <p className="feature-desc">
              Evaluate performances with professional feedback. Vote on who brings the heat.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon spectator">
              <Eye size={28} />
            </div>
            <h3 className="feature-title">Spectators</h3>
            <p className="feature-desc">
              Watch live battles, chat with fans, and vote for your favorite artist.
            </p>
          </div>
        </section>

        <section className="auth-section" id="join-section">
          <div className="auth-card">
            <div className="auth-header">
              <h2 className="auth-title">
                {showSignIn ? 'Welcome Back' : 'Join Dreamledge'}
              </h2>
              <p className="auth-subtitle">
                {showSignIn ? 'Sign in to continue to the arena' : 'Create an account to start battling'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="auth-form">
              {!showSignIn && (
                <div className="input-group">
                  <label className="input-label">
                    <User size={16} />
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className="input"
                    placeholder="Enter your username"
                    required={!showSignIn}
                  />
                </div>
              )}

              <div className="input-group">
                <label className="input-label">
                  <Mail size={16} />
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="input-group">
                <label className="input-label">
                  <Lock size={16} />
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="input"
                  placeholder="Enter your password"
                  required
                />
              </div>

              {error && <p className="error-text">{error}</p>}

              <button 
                type="submit" 
                className="btn btn-primary btn-lg"
                disabled={loading}
              >
                {loading ? (
                  <span className="loading-dots">
                    <span></span><span></span><span></span>
                  </span>
                ) : (
                  showSignIn ? 'Sign In' : 'Create Account'
                )}
              </button>
            </form>

            <div className="auth-footer">
              <p>
                {showSignIn ? "Don't have an account? " : "Already have an account? "}
                <button 
                  className="auth-switch"
                  onClick={() => setShowSignIn(!showSignIn)}
                >
                  {showSignIn ? 'Create Account' : 'Sign In'}
                </button>
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="home-footer">
        <p>&copy; 2024 Dreamledge. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
