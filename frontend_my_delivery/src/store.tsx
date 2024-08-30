import { configureStore } from '@reduxjs/toolkit';
import shopSlice from './slices/shopSlice';
import userReducer from './slices/userSlice';
import logger from 'redux-logger';
import { thunk } from 'redux-thunk';
import userSlice from './slices/userSlice';

// Define the RootState type
export type RootState = ReturnType<typeof store.getState>;

// Define the AppDispatch type
export type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer: {
    shop: shopSlice,
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk, logger as any),
});

export default store;