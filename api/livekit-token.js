import { AccessToken } from 'livekit-server-sdk';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const apiKey = process.env.LIVEKIT_API_KEY;
    const apiSecret = process.env.LIVEKIT_API_SECRET;

    if (!apiKey || !apiSecret) {
      return res.status(500).json({ error: 'Missing LIVEKIT_API_KEY or LIVEKIT_API_SECRET' });
    }

    const { roomName, identity, displayName, role } = req.body || {};
    const canPublish = role !== 'spectator';

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
      canPublish,
      canSubscribe: true,
      canPublishData: canPublish,
    });

    token.metadata = JSON.stringify({
      role: role || 'spectator',
      displayName: displayName || identity,
    });

    return res.status(200).json({ token: await token.toJwt() });
  } catch (error) {
    console.error('Vercel LiveKit token error:', error);
    return res.status(500).json({ error: 'Failed to create LiveKit token' });
  }
}
