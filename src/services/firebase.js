import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect, signOut } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyA99aKVRIdNJFVA6gsDVPHUl1pIcthwJAs",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "gen-lang-client-0324052801.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "gen-lang-client-0324052801",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "gen-lang-client-0324052801.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "566230423463",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:566230423463:web:9123cf85f3f342c4174882",
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL || "https://gen-lang-client-0324052801-default-rtdb.firebaseio.com"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    return await signInWithPopup(auth, googleProvider);
  } catch (popupError) {
    if (popupError.code === 'auth/popup-blocked' || popupError.code === 'auth/popup-closed-by-user') {
      await signInWithRedirect(auth, googleProvider);
      throw new Error('Redirecting...');
    }
    throw popupError;
  }
};

export const getRedirectResult = () => getAuth().getRedirectResult();
export const logOut = () => signOut(auth);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const rtdb = getDatabase(app);
export default app;
