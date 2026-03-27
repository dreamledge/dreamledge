import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../stores/appStore';
import { signInWithGoogle, getRedirectResult } from '../services/firebase';
import { userService } from '../services/userService';
import { Sparkles, Swords, Users, Mic, Gavel, Eye, ArrowRight, Mail, Lock, User, Chrome, Trophy } from 'lucide-react';
import './Home.css';

function Home() {
  const navigate = useNavigate();
  const { setUser, setUserProfile, setLoading, isAuthenticated } = useAuthStore();
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoadingState] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: '',
  });

  useEffect(() => {
    const handleRedirectResult = async () => {
      try {
        const result = await getRedirectResult();
        if (result && result.user) {
          const firebaseUser = {
            uid: result.user.uid,
            email: result.user.email,
            displayName: result.user.displayName,
            photoURL: result.user.photoURL,
          };
          
          const userProfile = await userService.createOrUpdateUser(firebaseUser);
          setUser(firebaseUser);
          setUserProfile(userProfile);
          setLoading(false);
          navigate('/lobby');
        }
      } catch (err) {
        console.error('Redirect result error:', err);
        if (err.message !== 'Redirecting...') {
          setError('Sign-in failed. Please try again.');
          setLoadingState(false);
        }
      }
    };
    
    handleRedirectResult();
  }, [navigate, setUser, setUserProfile, setLoading]);

  if (isAuthenticated) {
    navigate('/lobby');
    return null;
  }

  const handleGoogleSignIn = async () => {
    setError('');
    setLoadingState(true);
    
    try {
      await signInWithGoogle();
    } catch (err) {
      if (err.message === 'Redirecting...') {
        return;
      }
      let errorMsg = err.message || err.code || JSON.stringify(err) || 'Unknown error';
      alert('FAILED: ' + errorMsg);
      setError('Failed to sign in. Error: ' + errorMsg);
      setLoadingState(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoadingState(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const user = {
        uid: `user_${Date.now()}`,
        email: formData.email,
        displayName: formData.username || formData.email.split('@')[0],
      };
      
      setUser(user);
      setLoading(false);
      navigate('/profile');
    } catch (err) {
      setError('Authentication failed. Please try again.');
    } finally {
      setLoadingState(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
          <Sparkles className="logo-icon" />
          <span>Dreamledge</span>
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
                  setIsLogin(false);
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
                {isLogin ? 'Welcome Back' : 'Join Dreamledge'}
              </h2>
              <p className="auth-subtitle">
                {isLogin 
                  ? 'Sign in to continue to the arena' 
                  : 'Create an account to start battling'}
              </p>
            </div>

            <button 
              type="button" 
              className="btn btn-google"
              onClick={handleGoogleSignIn}
              disabled={loading}
            >
              <Chrome size={20} />
              Continue with Google
            </button>

            <div className="auth-divider">
              <span>or</span>
            </div>

            <form onSubmit={handleSubmit} className="auth-form">
              {!isLogin && (
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
                    placeholder="Choose a username"
                    required={!isLogin}
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
                  isLogin ? 'Sign In' : 'Create Account'
                )}
              </button>
            </form>

            <div className="auth-footer">
              <p>
                {isLogin ? "Don't have an account? " : "Already have an account? "}
                <button 
                  className="auth-switch"
                  onClick={() => setIsLogin(!isLogin)}
                >
                  {isLogin ? 'Sign Up' : 'Sign In'}
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
