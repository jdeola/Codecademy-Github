import { createSlice } from '@reduxjs/toolkit';
import { loadProduct, loadProducts } from './Products.actions';

const initialState = {};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // Load product data by ID success
      .addCase(loadProduct.fulfilled, (state, action) => {
        const { product } = action.payload;
        state[product.id] = product;
      })
      // Load product list success
      .addCase(loadProducts.fulfilled, (state, action) => {
        const { products } = action.payload;
        products.forEach((product) => {
          const { id } = product;
          state[id] = product;
        });
      })
  }
});

// Export reducer function by default
export default productSlice.reducer;