import { createSlice } from '@reduxjs/toolkit';

export const profitSlice = createSlice({
  name: 'profit',
  initialState: { value: 0 },
  reducers: {
    sellLemonade: (state) => {
      state.value += 5;
    },
    buyLemons: (state) => {
      state.value -= 2;
    },
  },
});

export const { sellLemonade, buyLemons } = profitSlice.actions;
export default profitSlice.reducer;