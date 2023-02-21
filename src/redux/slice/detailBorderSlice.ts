import { RootState } from '../strore';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


type detailItemBorder = {
  name: {
    common: string;
  };
};

export type fetchDetailParams = {
  borders: string[];
};

export const fetchBorderDetail = createAsyncThunk<
  detailItemBorder[],
  fetchDetailParams
>('country/fetchBorder', async (params) => {
  const { borders } = params;
  const { data } = await axios.get(
    'https://restcountries.com/v3.1/alpha?codes=' + borders.join(',')
  );
  return data.map((country: detailItemBorder) => country.name);
});

interface BorderDetailState {
  status: string;
  neighbors: detailItemBorder[];
}

const initialState: BorderDetailState = {
  neighbors: [],
  status: 'loading',
};

const detailBorderSlice = createSlice({
  name: 'countries/detailSlice',
  initialState,
  reducers: {
    setNeighbors(state, action) {
      state.neighbors = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBorderDetail.pending, (state) => {
      state.status = 'loading';
      state.neighbors = [];
    });
    builder.addCase(fetchBorderDetail.fulfilled, (state, action) => {
      state.status = 'success';
      state.neighbors = action.payload;
    });
    builder.addCase(fetchBorderDetail.rejected, (state) => {
      state.neighbors = [];
      state.status = 'error';
    });
  },
});

export default detailBorderSlice.reducer;
export const selectDetail = (state: RootState) => state.detailBorderSlice;
