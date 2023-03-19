import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../strore';

export interface filterSliceState {
  search: string;
  region: string;
}

const initialState: filterSliceState = {
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
export const selectFilter = (state: RootState) => state.filterSlicer;