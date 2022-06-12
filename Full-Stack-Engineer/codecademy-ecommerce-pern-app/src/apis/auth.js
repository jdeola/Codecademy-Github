import API from './client';

// API interface for logging a user in
export const login = async (credentials) => {
  try {
    const response = await API.post('auth/login', credentials);

    return response.data;

  } catch (err) {
    throw err.response.data;
  }
}

// API interface for registering a user
export const register = async (data) => {
  try {
    const response = await API.post('auth/register', data);

    return response.data;

  } catch(err) {
    throw err.response.data;
  }
}

// API interface for verifying the logged in status of a user
export const isLoggedIn = async () => {
  try {
    const response = await API.get('auth/logged_in');

    return response.data;

  } catch(err) {
    throw err.response.data;
  }
}