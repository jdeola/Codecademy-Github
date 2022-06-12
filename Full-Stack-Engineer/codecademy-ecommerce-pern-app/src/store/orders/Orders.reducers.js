import { createSlice } from '@reduxjs/toolkit';
import { checkoutCart } from '../cart/Cart.actions';
import { loadOrder, loadOrders } from './Orders.actions';

const initialState = {}

const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // Add order from successful checkout
      .addCase(checkoutCart.fulfilled, (state, action) => {
        const { order } = action.payload;
        state[order.id] = order;
      })
      // Load order data by ID success
      .addCase(loadOrder.fulfilled, (state, action) => {
        const { order } = action.payload;
        state[order.id] = order;
      })
      // Load order list success
      .addCase(loadOrders.fulfilled, (state, action) => {
        const { orders } = action.payload;
        orders.forEach(order => {
          const { id } = order;
          state[id] = order;
        });
      })
  }
});

// Export reducer function by default
export default orderSlice.reducer;