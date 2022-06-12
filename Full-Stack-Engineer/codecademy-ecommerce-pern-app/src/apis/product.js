import API from './client';

// API interface for loading products
export const fetchProducts = async () => {
  try {
    const response = await API.get(`products`);

    return response.data;

  } catch (err) {
    throw err.response.data;
  }
}

// API interface for loading a product by product ID
export const fetchProduct = async (productId) => {
  try {
    const response = await API.get(`products/${productId}`);
    
    return response.data;
  } catch(err) {
    throw err.response.data;
  }
}