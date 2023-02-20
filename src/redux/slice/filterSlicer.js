import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  search: '',
  region: '',
};

export const filterSlicer = createSlice({
  name: 'country/FilterSlice',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setRegion: (state, action) => {
      state.region = action.payload;
    },
    clearControls: () => initialState,
  },
});

export const { setRegion, setSearch, clearControls } =
  filterSlicer.actions;

export default filterSlicer.reducer;
export const selectFilter = (state) => state.filterSlicer;