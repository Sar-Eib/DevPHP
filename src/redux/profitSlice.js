import { createSlice } from '@reduxjs/toolkit';

export const profitSlice = createSlice({
  name: 'profit',
  initialState: { 
    value: 158     
  },
  reducers: {
    sellLemonade: (state) => {
      state.value += 5;
      state.totalSales += 1;
    },
    buyLemons: (state) => {
      if (state.value >= 2) {
        state.value -= 2;
      }
    }
  },
});

export const { sellLemonade, buyLemons } = profitSlice.actions;
export default profitSlice.reducer;