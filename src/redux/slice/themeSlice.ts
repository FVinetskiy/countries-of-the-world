import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../strore';

const initialState = {
  theme: 'light'
};

export const themeSlice = createSlice({
  name: 'country/theme',
  initialState,
  reducers: {
    setTheme(state, action) {
      state.theme = action.payload;
    },
  },
});


export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;

export const selectTheme = (state: RootState) => state.themeSlice;