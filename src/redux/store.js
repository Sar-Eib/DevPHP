import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import sourceReducer from './sourceSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    source: sourceReducer,
  },
});