import { configureStore } from '@reduxjs/toolkit';
import profitReducer from './profitSlice';

export const store = configureStore({
  reducer: {
    profit: profitReducer,
  },
});