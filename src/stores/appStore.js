import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useAuthStore = create(
  persist(
    (set, get) => ({
      user: null,
      userProfile: null,
      isAuthenticated: false,
      isLoading: true,
      
      setUser: (user) => set({ user, isAuthenticated: !!user }),
      setUserProfile: (profile) => set({ userProfile: profile }),
      setLoading: (loading) => set({ isLoading: loading }),
      
      logout: () => set({ user: null, userProfile: null, isAuthenticated: false }),
    }),
    {
      name: 'dreamledge-auth',
      partialize: (state) => ({ user: state.user, isAuthenticated: state.isAuthenticated }),
    }
  )
);

export const useBattleStore = create((set, get) => ({
  currentBattle: null,
  participants: [],
  battlePhase: 'idle',
  round: 1,
  timeRemaining: 0,
  isHost: false,
  userRole: null,
  userSlot: null,
  
  setCurrentBattle: (battle) => set({ currentBattle: battle }),
  setParticipants: (participants) => set({ participants }),
  setBattlePhase: (phase) => set({ battlePhase: phase }),
  setRound: (round) => set({ round }),
  setTimeRemaining: (time) => set({ timeRemaining: time }),
  setIsHost: (isHost) => set({ isHost }),
  setUserRole: (role) => set({ userRole: role }),
  setUserSlot: (slot) => set({ userSlot: slot }),
  
  resetBattle: () => set({
    currentBattle: null,
    participants: [],
    battlePhase: 'idle',
    round: 1,
    timeRemaining: 0,
    isHost: false,
    userRole: null,
    userSlot: null,
  }),
}));

export const useUIStore = create((set) => ({
  isSidebarOpen: false,
  isGifPickerOpen: false,
  activeModal: null,
  notifications: [],
  
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  closeSidebar: () => set({ isSidebarOpen: false }),
  toggleGifPicker: () => set((state) => ({ isGifPickerOpen: !state.isGifPickerOpen })),
  closeGifPicker: () => set({ isGifPickerOpen: false }),
  openModal: (modal) => set({ activeModal: modal }),
  closeModal: () => set({ activeModal: null }),
  addNotification: (notification) => set((state) => ({ 
    notifications: [...state.notifications, { id: Date.now(), ...notification }] 
  })),
  removeNotification: (id) => set((state) => ({ 
    notifications: state.notifications.filter(n => n.id !== id) 
  })),
}));
