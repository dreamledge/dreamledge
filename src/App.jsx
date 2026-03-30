import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useAuthStore } from './stores/appStore';
import { observeAuthState } from './services/firebase';
import { userService } from './services/userService';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Lobby from './pages/Lobby';
import Arena from './pages/Arena';
import Profile from './pages/Profile';
import Messages from './pages/Messages';
import Leaderboard from './pages/Leaderboard';
import WaitingRoom from './pages/WaitingRoom';
import './App.css';

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuthStore();
  
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

function App() {
  const { setUser, setUserProfile, logout } = useAuthStore();

  useEffect(() => {
    const unsubscribe = observeAuthState(async (firebaseUser) => {
      if (!firebaseUser) {
        logout();
        return;
      }

      const normalizedUser = {
        uid: firebaseUser.uid,
        email: firebaseUser.email,
        displayName: firebaseUser.displayName || firebaseUser.email?.split('@')[0] || 'Anonymous',
        photoURL: firebaseUser.photoURL || null,
      };

      setUser(normalizedUser);
      const profile = await userService.createOrUpdateUser(normalizedUser);
      setUserProfile(profile);
    });

    return () => unsubscribe();
  }, [logout, setUser, setUserProfile]);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lobby" element={
              <ProtectedRoute>
                <Lobby />
              </ProtectedRoute>
            } />
            <Route path="/waiting/:roomId" element={
              <ProtectedRoute>
                <WaitingRoom />
              </ProtectedRoute>
            } />
            <Route path="/arena/:battleId" element={
              <ProtectedRoute>
                <Arena />
              </ProtectedRoute>
            } />
            <Route path="/profile" element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } />
            <Route path="/messages" element={
              <ProtectedRoute>
                <Messages />
              </ProtectedRoute>
            } />
            <Route path="/messages/:conversationId" element={
              <ProtectedRoute>
                <Messages />
              </ProtectedRoute>
            } />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
