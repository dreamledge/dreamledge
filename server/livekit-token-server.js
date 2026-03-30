import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { AccessToken } from 'livekit-server-sdk';

dotenv.config();

const app = express();
const port = process.env.LIVEKIT_TOKEN_PORT || 3001;
const apiKey = process.env.LIVEKIT_API_KEY;
const apiSecret = process.env.LIVEKIT_API_SECRET;

app.use(cors());
app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({ ok: true });
});

app.post('/api/livekit-token', async (req, res) => {
  try {
    if (!apiKey || !apiSecret) {
      return res.status(500).json({ error: 'Missing LIVEKIT_API_KEY or LIVEKIT_API_SECRET' });
    }

    const { roomName, identity, displayName, role } = req.body || {};

    if (!roomName || !identity) {
      return res.status(400).json({ error: 'roomName and identity are required' });
    }

    const token = new AccessToken(apiKey, apiSecret, {
      identity,
      name: displayName || identity,
    });

    token.addGrant({
      roomJoin: true,
      room: roomName,
      canPublish: true,
      canSubscribe: true,
      canPublishData: true,
    });

    token.metadata = JSON.stringify({
      role: role || 'spectator',
      displayName: displayName || identity,
    });

    return res.json({ token: await token.toJwt() });
  } catch (error) {
    console.error('LiveKit token error:', error);
    return res.status(500).json({ error: 'Failed to create LiveKit token' });
  }
});

app.listen(port, () => {
  console.log(`LiveKit token server running on http://localhost:${port}`);
});
