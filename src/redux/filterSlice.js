import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedCategory: null, // null means all products
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    clearFilter: (state) => {
      state.selectedCategory = null;
    },
  },
});

export const { setCategory, clearFilter } = filterSlice.actions;
export default filterSlice.reducer;
