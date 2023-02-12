import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './api/apiSlice';
import { currentUserReducer } from './currentUser';

export const store = configureStore({
  reducer: {
    currentUser: currentUserReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: process.env.NODE_ENV === 'development',
});
