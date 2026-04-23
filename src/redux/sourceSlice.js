import { createSlice } from '@reduxjs/toolkit';

export const sourceSlice = createSlice({
  name: 'source',
  initialState: {
    apiSource: 'laravel',
  },
  reducers: {
    setApiSource: (state, action) => {
      state.apiSource = action.payload;
    },
  },
});

export const { setApiSource } = sourceSlice.actions;
export default sourceSlice.reducer;