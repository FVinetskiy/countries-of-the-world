import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../strore';

export type detailItem = {
  borders: string[];
  common: string;
  nofficial: string;
  population: string;
  region: string;
  flags: {
    png: string;
  };
};

export type fetchDetailParams = {
  name: string;
};

export const fetchDetail = createAsyncThunk<detailItem[], fetchDetailParams>(
  'country/fetchDetail',
  async (params) => {
    const { name } = params;
    const { data } = await axios.get(
      'https://restcountries.com/v3.1/name/' + name
    );
    return data[0];
  }
);


interface CartSliceState {
  status: string;
  detailInfo: detailItem[];
}

const initialState: CartSliceState = {
  detailInfo: [],
  status: 'loading',
};

const detailSlice = createSlice({
  name: 'countries/detailSlice',
  initialState,
  reducers: {
    setDetailInfo(state, action) {
      state.detailInfo = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDetail.pending, (state) => {
      state.status = 'loading';
      state.detailInfo = [];
    });
    builder.addCase(
      fetchDetail.fulfilled,
      (state, action: PayloadAction<detailItem[]>) => {
        state.status = 'success';
        state.detailInfo = action.payload;
      }
    );
    builder.addCase(fetchDetail.rejected, (state) => {
      state.detailInfo = [];
      state.status = 'error';
    });
  },
});

export default detailSlice.reducer;
export const selectDetail = (state: RootState) => state.detailSlice;
