import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import sourceReducer from './sourceSlice';
import filterReducer from './filterSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    source: sourceReducer,
    filter: filterReducer,
  },
});