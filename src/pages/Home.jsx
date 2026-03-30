import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../stores/appStore';
import { registerWithEmail, signInWithEmail, signInWithGoogle } from '../services/firebase';
import { userService } from '../services/userService';
import { Swords, Users, Mic, Gavel, Eye, ArrowRight, Mail, Lock, User, Trophy } from 'lucide-react';
import landingPageMovie from '../../image/landingpagemovie.mp4';
import './Home.css';

function Home() {
  const navigate = useNavigate();
  const { user, setUser, setUserProfile, isAuthenticated } = useAuthStore();
  const [loading, setLoadingState] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: '',
  });

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

    if (formData.password.length < 6 && !showSignIn) {
      setError('Password must be at least 6 characters');
      setLoadingState(false);
      return;
    }

    try {
      let firebaseUser;

      if (showSignIn) {
        const result = await signInWithEmail(formData.email, formData.password);
        firebaseUser = result.user;
      } else {
        if (!formData.username.trim()) {
          setError('Username is required');
          setLoadingState(false);
          return;
        }

        const result = await registerWithEmail(formData.email, formData.password, formData.username.trim());
        firebaseUser = result.user;
      }

      const normalizedUser = {
        uid: firebaseUser.uid,
        email: firebaseUser.email,
        displayName: firebaseUser.displayName || formData.username || formData.email.split('@')[0],
        photoURL: firebaseUser.photoURL || null,
      };

      const userProfile = await userService.createOrUpdateUser(normalizedUser);

      setUser(normalizedUser);
      setUserProfile(userProfile);
      setLoadingState(false);
      navigate('/lobby');
    } catch (err) {
      console.error('Auth error:', err);
      setError(err.message || 'Failed to process request. Please try again.');
      setLoadingState(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleGoogleSignIn = async () => {
    setError('');
    setLoadingState(true);

    try {
      const result = await signInWithGoogle();
      const firebaseUser = result.user;
      const normalizedUser = {
        uid: firebaseUser.uid,
        email: firebaseUser.email,
        displayName: firebaseUser.displayName || firebaseUser.email?.split('@')[0] || 'Dreamledge Artist',
        photoURL: firebaseUser.photoURL || null,
      };

      const userProfile = await userService.createOrUpdateUser(normalizedUser);

      setUser(normalizedUser);
      setUserProfile(userProfile);
      setLoadingState(false);
      navigate('/lobby');
    } catch (err) {
      console.error('Google auth error:', err);
      setError(err.message || 'Failed to sign in with Google. Please try again.');
      setLoadingState(false);
    }
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
          <span className="logo-wordmark">Dreamledge</span>
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
            <div className="media-card">
              <div className="media-card-header">
                <div className="media-live-pill">
                  <span className="media-live-dot"></span>
                  Live Battle Feed
                </div>
                <div className="media-viewers">
                  <Eye size={14} />
                  12.4K
                </div>
              </div>

              <div className="battle-preview-video-wrap">
                <video
                  className="battle-preview-video"
                  src={landingPageMovie}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                />
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

            <div className="social-auth-panel">
              <button
                type="button"
                className="google-auth-button"
                onClick={handleGoogleSignIn}
                disabled={loading}
              >
                <span className="google-auth-orb"></span>
                <span className="google-auth-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="img">
                    <path fill="#EA4335" d="M12 10.2v3.9h5.42c-.24 1.25-.95 2.31-2 3.03l3.24 2.52c1.89-1.74 2.98-4.31 2.98-7.36 0-.72-.06-1.4-.19-2.06H12Z" />
                    <path fill="#34A853" d="M12 22c2.7 0 4.97-.89 6.63-2.41l-3.24-2.52c-.9.61-2.05.97-3.39.97-2.6 0-4.81-1.75-5.6-4.11l-3.35 2.58A10 10 0 0 0 12 22Z" />
                    <path fill="#4A90E2" d="M6.4 13.93A5.96 5.96 0 0 1 6.09 12c0-.67.12-1.32.31-1.93l-3.35-2.58A10 10 0 0 0 2 12c0 1.61.38 3.13 1.05 4.51l3.35-2.58Z" />
                    <path fill="#FBBC05" d="M12 5.96c1.47 0 2.78.51 3.82 1.5l2.87-2.87C16.96 2.98 14.7 2 12 2a10 10 0 0 0-8.95 5.49l3.35 2.58C7.19 7.71 9.4 5.96 12 5.96Z" />
                  </svg>
                </span>
                <span className="google-auth-copy">
                  <strong>Continue with Google</strong>
                  <small>Fast-track your entrance to the arena</small>
                </span>
                <ArrowRight size={18} />
              </button>

              <div className="auth-divider" aria-hidden="true">
                <span></span>
                <p>or roll in with email</p>
                <span></span>
              </div>
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
