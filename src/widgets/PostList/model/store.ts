import { configureStore } from '@reduxjs/toolkit';
import postListReducer from './slice';

export const store = configureStore({
  reducer: {
    postList: postListReducer,
  },
});

export type TypePostState = ReturnType<typeof store.getState>;
