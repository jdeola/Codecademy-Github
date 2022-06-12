import { createSlice } from '@reduxjs/toolkit';

export const CATEGORIES = ['housing', 'food', 'transportation', 'utilities', 'clothing', 'healthcare', 'personal', 'education', 'entertainment'];
const initialState = Object.fromEntries(CATEGORIES.map(category => [category, []]))

export const selectTransactions = (state) => state.transactions;
export const selectFlattenedTransactions = (state) => Object.values(state.transactions).reduce((a,b) => [...a, ...b], []);

const transactionsSlice = createSlice({
  name:'transactions',
  initialState: initialState,
  reducers: {
    
    addTransaction: (state, action)=>{
      state[action.payload.category].push(action.payload);
    },

    deleteTransaction: (state, action)=>{
      state[action.payload.category].filter(obj => obj.id !== action.payload.id);
    },

  }
});

export const {addTransaction, deleteTransaction } = transactionsSlice.actions;
export default transactionsSlice.reducer;

