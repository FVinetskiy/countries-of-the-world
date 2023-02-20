import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const fetchCountry = createAsyncThunk(
  'countrie/fetchByIdStatus',
  async () => {
    const response = await axios.get(
      `https://restcountries.com/v2/all?fields=population,flags,region,name,capital`
    );
    return response.data;
  }
);

const initialState = {
  countries: [],
  status: 'loading' | 'succes' | 'error',
}; 

const countriesSlice = createSlice({
  name: 'countries/fetchAllCountries',
  initialState,
  reducers: {
    setItems(state, action) {
      state.countries = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCountry.pending, (state, action) => {
      state.status = 'loading';
      state.countries = [];
    });
    builder.addCase(fetchCountry.fulfilled, (state, action) => {
      state.status = 'succes';
      state.countries = action.payload;
    });
    builder.addCase(fetchCountry.rejected, (state, action) => {
      state.countries = [];
      state.status = 'error';
    });
  },
});

export const { setItems } = countriesSlice.actions;
export default countriesSlice.reducer;
export const selectCountry = (state) => state.countriesSlice;