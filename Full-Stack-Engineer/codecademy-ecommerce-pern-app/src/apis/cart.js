import API from './client';

// API interface for loading the user's cart
export const fetchCart = async () => {
  try {
    const response = await API.get(`carts/mine`);

    return response.data;

  } catch (err) {
    throw err.response.data;
  }
}

// API interface for adding a product to a user's cart
export const addToCart = async (productId, qty) => {
  try {
    const response = await API.post(`carts/mine/items`, { productId, qty });

    return response.data;

  } catch(err) {
    throw err.response.data;
  }
}

// API interface for removing a product from a user's cart
export const removeFromCart = async (cartItemId) => {
  try {
    const response = await API.delete(`carts/mine/items/${cartItemId}`);

    return response.data;

  } catch(err) {
    throw err.response.data;
  }
}

// API interface for checking out a user's cart
export const checkout = async (cartId, paymentInfo) => {
  try {
    const response = await API.post(`carts/mine/checkout`, { cartId, paymentInfo });

    return response.data;

  } catch(err) {
    throw err.response.data;
  }
}