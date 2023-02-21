import { RootState } from '../strore';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { PayloadAction } from '@reduxjs/toolkit';

type country = {
  name: string;
  capital: string;
  region: string;
  population: number;
  independent: boolean;
  flags: {
     png:string;
     svg:string;
   }
};

interface CountryState {
  countries: country[];
  status: 'loading' | 'success' | 'error';
}

export const fetchCountry = createAsyncThunk(
  'country/fetchByIdStatus',
  async () => {
    const response = await axios.get<country[]>(
      `https://restcountries.com/v2/all?fields=population,flags,region,name,capital`
    );
    return response.data;
  }
);

const initialState: CountryState = {
  countries: [],
  status: 'loading',
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

    builder.addCase(fetchCountry.fulfilled, (state, action: PayloadAction<country[]>) => {
        state.status = 'success';
        state.countries = action.payload;
      }
    );
    builder.addCase(fetchCountry.rejected, (state, action) => {
      state.countries = [];
      state.status = 'error';
    });
  },
});

export const { setItems } = countriesSlice.actions;
export default countriesSlice.reducer;
export const selectCountry = (state: RootState) => state.countriesSlice;