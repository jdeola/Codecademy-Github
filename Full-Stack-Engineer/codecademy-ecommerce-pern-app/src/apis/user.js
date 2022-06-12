import API from './client';

// API interface for loading the user's profile
export const fetchUser = async (userId) => {
  try {
    const response = await API.post(`users/${userId}`);

    return response.data;

  } catch (err) {
    throw err.response.data;
  }
}

// API interface for updating the user's profile
export const updateUser = async (userId) => {
  try {
    const response = await API.post(`users/${userId}`, data);

    return response.data;

  } catch(err) {
    throw err.response.data;
  }
}