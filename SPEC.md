# Dreamledge - Social Live Battle Arena

## Project Overview

**Project Name**: Dreamledge  
**Type**: Social Live Battle Arena Web Application  
**Core Functionality**: A real-time platform where artists compete in rap/music battles, judges evaluate performances, and spectators watch and chat.  
**Target Users**: Rappers, singers, music producers, judges, and music enthusiasts

## Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: CSS Modules with CSS Variables
- **State Management**: React Context + useReducer
- **Routing**: React Router DOM v6
- **Backend**: Firebase Free Tier (Auth, Firestore, Storage, Realtime Database)
- **Video/Audio**: LiveKit (Free Tier)
- **GIFs**: GIPHY API (Free Tier)
- **Icons**: Lucide React

## Design System

### Color Palette
```css
--bg-primary: #0a0a0a
--bg-secondary: #141414
--bg-tertiary: #1a1a1a
--bg-card: #121212
--bg-elevated: #1e1e1e
--text-primary: #ffffff
--text-secondary: #a0a0a0
--text-muted: #666666
--accent-red: #e63946
--accent-red-hover: #ff4d5a
--accent-red-glow: rgba(230, 57, 70, 0.3)
--border-color: #2a2a2a
--border-hover: #3a3a3a
--success: #2ecc71
--warning: #f39c12
--error: #e74c3c
```

### Typography
- **Primary Font**: 'Outfit', sans-serif (Google Fonts)
- **Monospace**: 'JetBrains Mono', monospace
- **Headings**: 700 weight, tracking -0.02em
- **Body**: 400 weight, 16px base
- **Small**: 14px

### Spacing Scale
- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px
- 2xl: 48px
- 3xl: 64px

### Border Radius
- sm: 8px
- md: 12px
- lg: 16px
- xl: 24px
- full: 9999px

### Visual Effects
- Card shadows: 0 4px 24px rgba(0, 0, 0, 0.4)
- Glow effects: box-shadow with accent-red-glow
- Backdrop blur: 12px
- Transitions: 200ms ease-out

## Page Structure

### 1. Home Page
- Hero section with Dreamledge branding
- Tagline: "Live Battle Arena for Artists"
- Sign up / Sign in forms
- Feature highlights (Artists, Judges, Spectators)
- Animated background with subtle particles

### 2. Lobby/Role Selection Page
- Role selection cards:
  - Random Artist Battle
  - Random Judge
  - Random Spectator
  - Create Battle (private room)
- Active matchmaking rooms list
- Create room modal with shareable code

### 3. Matchmaking Room
- Live video grid of waiting participants
- Participant list with role badges
- Real-time chat
- Ready status indicators
- Start battle button (when ready)

### 4. Battle Arena Page
- **Top Half (Video Grid)**:
  - 2 Artist video boxes (larger)
  - 2 Judge video boxes (smaller)
  - Role labels on each box
  - Name tags
  - Mic/camera status indicators

- **Bottom Section**:
  - Battle info bar (phase, round, timer)
  - Live crowd chat
  - GIF button
  - Message input

- **Controls**:
  - Mic toggle
  - Camera toggle
  - Leave battle button

### 5. Profile Page
- Avatar upload
- Username (editable, real-time sync)
- Bio (editable)
- Account stats
- Role badge

### 6. Messages Page
- **Conversations List**:
  - Direct messages
  - Group chat rooms
  - Search functionality

- **Chat View**:
  - Message thread
  - Member list (for groups)
  - GIF support
  - Real-time updates

### 7. Chat Rooms Tab
- Room list with search
- Create room button
- Public rooms visible to all
- Join room functionality

## Component Library

### Navigation
- Fixed top navbar
- Backdrop blur effect
- Logo (left)
- Nav links (right)
- Mobile: hamburger menu
- Active link indicator

### Cards
- Elevated background
- Subtle border
- Hover glow effect
- Rounded corners (16px)

### Buttons
- Primary: Red accent, white text
- Secondary: Transparent, white border
- Ghost: No border, text only
- States: hover, active, disabled, loading

### Inputs
- Dark background
- Subtle border
- Focus glow effect
- Error state styling

### Video Boxes
- 16:9 aspect ratio
- Rounded corners
- Name overlay
- Status indicators
- Mute/camera off states

### Chat
- Message bubbles (own vs others)
- Timestamps
- GIF display
- Auto-scroll
- Typing indicators

### Modals
- Centered overlay
- Backdrop blur
- Slide-in animation
- Close button

### Loading States
- Skeleton loaders
- Spinner animations
- Progress indicators

### Error States
- Inline error messages
- Toast notifications
- Full-page error screens

## Database Schema (Firestore)

### users/{userId}
```javascript
{
  username: string,
  bio: string,
  avatarUrl: string,
  role: 'artist' | 'judge' | 'spectator',
  createdAt: timestamp,
  lastSeen: timestamp
}
```

### battles/{battleId}
```javascript
{
  status: 'waiting' | 'preparing' | 'active' | 'completed',
  phase: 'waiting' | 'submission' | 'performance' | 'voting' | 'results',
  round: number,
  currentArtist: number,
  trackUrls: { artist1: string, artist2: string },
  votes: { artist1: number, artist2: number },
  judgeVotes: { judge1: string, judge2: string },
  winner: string | null,
  createdAt: timestamp,
  hostId: string
}
```

### participants/{battleId}/users/{userId}
```javascript
{
  role: 'artist' | 'judge' | 'spectator',
  slot: number,
  joinedAt: timestamp,
  isReady: boolean
}
```

### messages/{battleId}/chat/{messageId}
```javascript
{
  userId: string,
  username: string,
  avatarUrl: string,
  content: string,
  type: 'text' | 'gif',
  timestamp: timestamp
}
```

### chatRooms/{roomId}
```javascript
{
  name: string,
  createdBy: string,
  members: string[],
  isPublic: boolean,
  createdAt: timestamp,
  lastMessage: timestamp
}
```

### chatMessages/{roomId}/messages/{messageId}
```javascript
{
  userId: string,
  username: string,
  avatarUrl: string,
  content: string,
  type: 'text' | 'gif',
  timestamp: timestamp
}
```

### directMessages/{conversationId}/messages/{messageId}
```javascript
{
  senderId: string,
  content: string,
  type: 'text' | 'gif',
  timestamp: timestamp
}
```

## Real-time Features

### LiveKit Integration
- Room creation on battle start
- Participant tracks management
- Audio/video publishing
- Screen sharing for judges
- Automatic quality adjustment

### Firestore Real-time Listeners
- Battle state sync
- Participant updates
- Chat messages
- Profile changes
- Vote tracking

## Battle Flow

### Phase 1: Waiting
- Minimum 2 artists + 2 judges required
- Participants can chat/communicate
- Host can start when requirements met

### Phase 2: Preparation (30s)
- Countdown timer
- Artists prepare tracks
- Judges get ready

### Phase 3: Track Upload
- Artists upload MP3 (max 5MB)
- 2-minute upload window
- Auto-delete after round

### Phase 4: Performance (3min per track)
- Random artist order
- Only one track plays
- Timer cannot be paused
- Crowd watches

### Phase 5: Voting (30s)
- Judges speak and vote
- Crowd votes simultaneously
- Tie = overtime round

### Phase 6: Results
- Winner announced
- Stats displayed
- Option to rematch

## GIF Integration

### GIPHY API
- Search endpoint
- Trending GIFs
- Selection sends URL to chat
- Display as inline image

## Mobile-First Design

### Breakpoints
- Mobile: 0-767px
- Tablet: 768-1023px
- Desktop: 1024px+

### Mobile Optimizations
- Touch-friendly buttons (min 44px)
- Bottom navigation consideration
- Swipe gestures
- Keyboard handling
- Camera orientation

## Error Handling

### Camera/Mic
- Permission denied → Show instructions
- Not found → Show device selection
- In use → Show conflict message

### Network
- Connection lost → Reconnect overlay
- Timeout → Retry with backoff
- Firebase errors → User-friendly messages

### Upload
- File too large → Show size limit
- Invalid format → Show accepted formats
- Failed → Retry option

## Acceptance Criteria

1. ✓ App loads without errors
2. ✓ Authentication works (sign up/in/out)
3. ✓ Profile editing with real-time sync
4. ✓ Role selection and matchmaking
5. ✓ Battle arena displays correctly
6. ✓ Video/audio controls work
7. ✓ Chat with GIF support functions
8. ✓ Messages and group chats work
9. ✓ Responsive on mobile and desktop
10. ✓ Smooth animations and transitions
11. ✓ Dark theme consistently applied
12. ✓ Navbar stays fixed during scroll
