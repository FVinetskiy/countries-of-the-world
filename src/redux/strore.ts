import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import countriesSlice from './slice/countriesSlice';
import themeSlice from './slice/themeSlice';
import detailSlice from './slice/detailSlice';
import filterSlicer from './slice/filterSlicer';
import detailBorderSlice from './slice/detailBorderSlice';

export const store = configureStore({
  reducer: {
    countriesSlice,
    themeSlice,
    detailSlice,
    filterSlicer,
    detailBorderSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();