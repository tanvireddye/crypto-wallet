/**
 * API client utility for interacting with the Spring Boot backend.
 */
const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

/**
 * Parses HTTP response and formats error messages if the request failed.
 */
async function handleResponse(response) {
  let result = null;
  try {
    result = await response.json();
  } catch {
    if (!response.ok) {
      throw new Error(`Server returned status ${response.status}`);
    }
    return null;
  }

  if (!response.ok || result?.success === false) {
    // If validation error map was returned
    if (result?.data && typeof result.data === 'object' && !Array.isArray(result.data)) {
      const fieldErrors = Object.values(result.data).join('. ');
      if (fieldErrors) {
        throw new Error(fieldErrors);
      }
    }
    throw new Error(result?.message || `Request failed with status ${response.status}`);
  }

  return result.data;
}

/**
 * Registers a new user and provisions a new crypto wallet.
 * Calls POST /api/auth/signup
 */
export async function apiSignup({ fullName, email, password }) {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        fullName: fullName.trim(),
        email: email.trim().toLowerCase(),
        password,
      }),
    });

    return await handleResponse(response);
  } catch (err) {
    if (err.name === 'TypeError' && err.message.includes('fetch')) {
      throw new Error('Cannot connect to backend server. Please verify the Spring Boot backend is running on http://localhost:8080');
    }
    throw err;
  }
}

/**
 * Authenticates user credentials and returns JWT token.
 * Calls POST /api/auth/login
 */
export async function apiLogin({ email, password }) {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        email: email.trim().toLowerCase(),
        password,
      }),
    });

    return await handleResponse(response);
  } catch (err) {
    if (err.name === 'TypeError' && err.message.includes('fetch')) {
      throw new Error('Cannot connect to backend server. Please verify the Spring Boot backend is running on http://localhost:8080');
    }
    throw err;
  }
}
