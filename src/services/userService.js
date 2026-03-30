import { doc, getDoc, setDoc, updateDoc, serverTimestamp, collection, query, where, getDocs } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from './firebase';

export const userService = {
  async createOrUpdateUser(user) {
    const userRef = doc(db, 'users', user.uid);
    const existingUser = await getDoc(userRef);

    const userData = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName || 'Anonymous',
      photoURL: user.photoURL || null,
      bio: '',
      updatedAt: serverTimestamp(),
    };

    if (!existingUser.exists()) {
      userData.createdAt = serverTimestamp();
      userData.points = 1000;
      userData.wins = 0;
      await setDoc(userRef, userData);
    } else {
      await updateDoc(userRef, {
        ...userData,
        updatedAt: serverTimestamp(),
      });
    }

    return userData;
  },

  async getUserProfile(uid) {
    const userRef = doc(db, 'users', uid);
    const userSnap = await getDoc(userRef);
    
    if (userSnap.exists()) {
      return { id: userSnap.id, ...userSnap.data() };
    }
    return null;
  },

  async getUserByEmail(email) {
    const usersRef = collection(db, 'users');
    const q = query(usersRef, where('email', '==', email));
    const querySnapshot = await getDocs(q);
    
    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      return { id: doc.id, ...doc.data() };
    }
    return null;
  },

  async searchUsers(searchTerm, currentUserId) {
    const normalizedSearch = searchTerm.trim().toLowerCase();
    if (!normalizedSearch) return [];

    const usersRef = collection(db, 'users');
    const snapshot = await getDocs(usersRef);

    return snapshot.docs
      .map((userDoc) => ({ id: userDoc.id, ...userDoc.data() }))
      .filter((profile) => profile.uid && profile.uid !== currentUserId)
      .filter((profile) => {
        const searchableValues = [
          profile.displayName,
          profile.username,
          profile.email,
          profile.uid,
        ]
          .filter(Boolean)
          .map((value) => value.toLowerCase());

        return searchableValues.some((value) => value.includes(normalizedSearch));
      })
      .slice(0, 12);
  },

  async updateUserProfile(uid, updates) {
    const userRef = doc(db, 'users', uid);
    await updateDoc(userRef, {
      ...updates,
      updatedAt: serverTimestamp(),
    });
  },

  async uploadProfilePicture(uid, file) {
    const storageRef = ref(storage, `profile_pictures/${uid}`);
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);
    
    await updateDoc(doc(db, 'users', uid), {
      photoURL: downloadURL,
      updatedAt: serverTimestamp(),
    });
    
    return downloadURL;
  },

  async getLeaderboard(limit = 50) {
    // This would be implemented with a Firestore query
    // For now, we'll use the demo data in Leaderboard.jsx
    return [];
  }
};

export default userService;
