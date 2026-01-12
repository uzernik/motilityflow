/**
 * DEV ONLY — Temporary Generic ChatGPT Wiring
 * 
 * This is a throwaway integration for validating:
 * - Panel UX
 * - Request/response flow
 * - Latency
 * - Error handling
 * 
 * EXIT PLAN: This will be replaced by MotilityFlow-controlled prompts,
 * strict data envelope, and deterministic advice rules.
 * 
 * DO NOT OPTIMIZE THIS PATH.
 */

const BACKEND_URL = 'http://localhost:8000';

/**
 * Send a message to the generic ChatGPT endpoint.
 * 
 * AI Panel is intentionally stateless (Phase-1)
 * 
 * NO injection of:
 * - Dashboard context
 * - Motility data
 * - User history
 * - Previous messages
 * - Conversation arrays
 * - Thread/session IDs
 * 
 * Each request is independent. No context reuse.
 * 
 * @param {string} userMessage - Verbatim user text (current message only)
 * @returns {Promise<string>} - Assistant response text
 * @throws {Error} - On any failure
 */
export async function sendDevChatMessage(userMessage) {
  // AI Panel is intentionally stateless (Phase-1)
  const response = await fetch(`${BACKEND_URL}/dev/chat`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message: userMessage,
    }),
  });

  if (!response.ok) {
    throw new Error('Request failed');
  }

  const data = await response.json();
  return data.response;
}

