import { createSlice } from '@reduxjs/toolkit';

export const boostInputSlice = createSlice({
  name: 'boost',
  initialState: {
    name: 'Boost',
    description: 'Payment Solutions',
  },
  reducers: {
    changeName: (state, action) => {
      state.name = action.payload;
    },
    changeDescription: (state, action) => {
      state.description = action.payload;
    },
  },
});

export const { changeName, changeDescription } = boostInputSlice.actions;

export const selectName = (state) => state.boost.name;
export const selectDescription = (state) => state.boost.description;

export default boostInputSlice.reducer;
