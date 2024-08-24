import { configureStore } from '@reduxjs/toolkit';
import shopSlice from './slices/shopSlice';
import logger from 'redux-logger';
import { thunk } from 'redux-thunk';

// Define the RootState type
export type RootState = ReturnType<typeof store.getState>;

// Define the AppDispatch type
export type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer: {
    shop: shopSlice,  // Added the shop slice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk, logger as any),
});

export default store;