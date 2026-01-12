/**
 * User Service — Multi-user support with name-only registration
 */

const BACKEND_URL = 'http://localhost:8000';

/**
 * Get list of all registered users.
 * @returns {Promise<Array<{user_id: string, name: string}>>}
 */
export async function listUsers() {
  const response = await fetch(`${BACKEND_URL}/users`);
  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }
  const data = await response.json();
  return data.users;
}

/**
 * Create a new user by name only. No password.
 * @param {string} name
 * @returns {Promise<{user_id: string, name: string}>}
 */
export async function createUser(name) {
  const response = await fetch(`${BACKEND_URL}/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name }),
  });
  if (!response.ok) {
    const err = await response.json();
    throw new Error(err.detail || 'Failed to create user');
  }
  return response.json();
}

/**
 * Get conversation history for a user.
 * @param {string} userId
 * @returns {Promise<Array<{role: string, text: string}>>}
 */
export async function getUserMessages(userId) {
  const response = await fetch(`${BACKEND_URL}/users/${userId}/messages`);
  if (!response.ok) {
    throw new Error('Failed to fetch messages');
  }
  const data = await response.json();
  return data.messages;
}

/**
 * Send a chat message for a specific user.
 * Includes conversation history in LLM call (server-side).
 * @param {string} userId
 * @param {string} message
 * @param {string|null} imageBase64 - Optional base64 encoded image (data URL)
 * @returns {Promise<string>} Assistant response
 */
export async function sendChatMessage(userId, message, imageBase64 = null) {
  const body = { user_id: userId, message };
  if (imageBase64) {
    body.image = imageBase64;
  }
  
  const response = await fetch(`${BACKEND_URL}/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!response.ok) {
    throw new Error('Failed to send message');
  }
  const data = await response.json();
  return data.response;
}

