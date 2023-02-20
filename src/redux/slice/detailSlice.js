import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchDetail = createAsyncThunk(
  'product/fetchProductStatus',
  async (params) => {
    const { name } = params;
    const { data } = await axios.get(
      'https://restcountries.com/v3.1/name/' + name
    );
    return data[0];
  }
);

export const fetchBorderDetail = createAsyncThunk(
  'product/fetchBorderStatus',
  async (params) => {
    const { borders } = params;
    const { data } = await axios.get(
        'https://restcountries.com/v3.1/alpha?codes=' + borders.join(',')
      )
    return data.map((country) => country.name);
  }
);

const initialState = {
  detailInfo: [],
  neighbors: [],
  status: 'loading' | 'succes' | 'error',
};

const detailSlice = createSlice({
  name: 'countries/detailSlice',
  initialState,
  reducers: {
    setDetailInfo(state, action) {
      state.detailInfo = action.payload;
    },
    setNeighbors(state, action) {
      state.neighbors = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDetail.pending, (state, action) => {
      state.status = 'loading';
      state.detailInfo = [];
    });
    builder.addCase(fetchDetail.fulfilled, (state, action) => {
      state.status = 'succes';
      state.detailInfo = action.payload;
    });
    builder.addCase(fetchDetail.rejected, (state, action) => {
      state.detailInfo = [];
      state.status = 'error';
    });
    //
    builder.addCase(fetchBorderDetail.fulfilled, (state, action) => {
      state.status = 'succes';
      state.neighbors = action.payload;
    });
    builder.addCase(fetchBorderDetail.rejected, (state, action) => {
      state.neighbors = [];
      state.status = 'error';
    });
  },
});

export const { setDetailInfo, setNeighbors } = detailSlice.actions;
export default detailSlice.reducer;
export const selectDetail = (state) => state.detailSlice;
