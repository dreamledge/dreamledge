import { doc, getDoc, setDoc, updateDoc, serverTimestamp, collection, query, where, getDocs, onSnapshot } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from './firebase';

const USER_PROFILE_COLLECTION = 'users';
const USER_DIRECTORY_COLLECTION = import.meta.env.VITE_FIREBASE_USER_DIRECTORY_COLLECTION || 'publicUsers';

function profileDoc(uid) {
  return doc(db, USER_PROFILE_COLLECTION, uid);
}

function directoryDoc(uid) {
  return doc(db, USER_DIRECTORY_COLLECTION, uid);
}

function buildPublicProfile(profile = {}) {
  return {
    uid: profile.uid,
    displayName: profile.displayName || 'Anonymous',
    username: profile.username || profile.displayName || 'Anonymous',
    photoURL: profile.photoURL || null,
    bio: profile.bio || '',
    updatedAt: serverTimestamp(),
  };
}

async function syncDirectoryProfile(profile) {
  if (!profile?.uid) {
    return;
  }

  const publicProfile = buildPublicProfile(profile);
  await setDoc(directoryDoc(profile.uid), publicProfile, { merge: true });
}

export const userService = {
  async createOrUpdateUser(user) {
    const userRef = profileDoc(user.uid);
    const existingUser = await getDoc(userRef);

    if (!existingUser.exists()) {
      const userData = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName || 'Anonymous',
        username: user.displayName || 'Anonymous',
        photoURL: user.photoURL || null,
        bio: '',
        points: 1000,
        wins: 0,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      };

      await setDoc(userRef, userData);
      await syncDirectoryProfile(userData);
      return { ...userData, createdAt: new Date(), updatedAt: new Date() };
    }

    const existingData = existingUser.data();
    const updates = {
      email: user.email || existingData.email || '',
      updatedAt: serverTimestamp(),
    };

    if (!existingData.displayName && user.displayName) {
      updates.displayName = user.displayName;
    }

    if (!existingData.username && (existingData.displayName || user.displayName)) {
      updates.username = existingData.displayName || user.displayName;
    }

    if (!existingData.photoURL && user.photoURL) {
      updates.photoURL = user.photoURL;
    }

    await setDoc(userRef, updates, { merge: true });

    const mergedProfile = {
      id: existingUser.id,
      ...existingData,
      ...Object.fromEntries(Object.entries(updates).filter(([, value]) => value !== undefined)),
    };

    await syncDirectoryProfile(mergedProfile);
    return mergedProfile;
  },

  async getUserProfile(uid) {
    const userRef = profileDoc(uid);
    const userSnap = await getDoc(userRef);
    
    if (userSnap.exists()) {
      return { id: userSnap.id, ...userSnap.data() };
    }
    return null;
  },

  subscribeToUserProfile(uid, callback) {
    return onSnapshot(profileDoc(uid), (userSnap) => {
      callback(userSnap.exists() ? { id: userSnap.id, ...userSnap.data() } : null);
    });
  },

  async getUserByEmail(email) {
    const usersRef = collection(db, USER_PROFILE_COLLECTION);
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

    const usersRef = collection(db, USER_DIRECTORY_COLLECTION);
    const snapshot = await getDocs(usersRef);

    return snapshot.docs
      .map((userDoc) => ({ id: userDoc.id, ...userDoc.data() }))
      .filter((profile) => profile.uid && profile.uid !== currentUserId)
      .filter((profile) => {
        const searchableValues = [
          profile.displayName,
          profile.username,
          profile.uid,
        ]
          .filter(Boolean)
          .map((value) => value.toLowerCase());

        return searchableValues.some((value) => value.includes(normalizedSearch));
      })
      .slice(0, 12);
  },

  async updateUserProfile(uid, updates) {
    const userRef = profileDoc(uid);
    const nextProfile = {
      uid,
      ...updates,
      updatedAt: serverTimestamp(),
    };

    if (updates.displayName && !updates.username) {
      nextProfile.username = updates.displayName;
    }

    await setDoc(userRef, nextProfile, { merge: true });
    await syncDirectoryProfile(nextProfile);

    const updatedProfile = await this.getUserProfile(uid);
    return updatedProfile;
  },

  async uploadProfilePicture(uid, file) {
    const storageRef = ref(storage, `profile_pictures/${uid}`);
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);

    await this.updateUserProfile(uid, {
      photoURL: downloadURL,
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
