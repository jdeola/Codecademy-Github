import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchOrder, fetchOrders } from '../../apis/order';

export const loadOrder = createAsyncThunk(
  'orders/loadOrder',
  async (orderId, thunkAPI) => {
    try {
      const response = await fetchOrder(orderId);
      return {
        order: response
      };
    } catch(err) {
      throw err;
    }
  }
);

export const loadOrders = createAsyncThunk(
  'orders/loadOrders',
  async (params, thunkAPI) => {
    try {
      const response = await fetchOrders();
      return {
        orders: response
      }
    } catch(err) {
      throw err;
    }
  }
);