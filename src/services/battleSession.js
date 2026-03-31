const SESSION_STORAGE_KEY = 'dreamledge-battle-session-id';

export function getBattleSessionId() {
  if (typeof window === 'undefined') {
    return 'server-session';
  }

  let sessionId = window.sessionStorage.getItem(SESSION_STORAGE_KEY);
  if (!sessionId) {
    sessionId = `session-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
    window.sessionStorage.setItem(SESSION_STORAGE_KEY, sessionId);
  }

  return sessionId;
}
