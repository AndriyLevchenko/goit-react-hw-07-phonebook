import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    inputFilterForm(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { inputFilterForm } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;