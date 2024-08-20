import { configureStore } from '@reduxjs/toolkit';
import shopSlice from './slices/shopSlice';
// import {logger} from 'redux-logger';
// import {thunk} from 'redux-thunk';

export const store = configureStore({
  reducer: {
    shop: shopSlice,
  },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(thunk, logger as any),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch 