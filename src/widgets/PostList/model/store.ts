import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { postApi } from './api';
import postReducer from './slice';

export const store = configureStore({
  reducer: {
    [postApi.reducerPath]: postApi.reducer,
    postReducer,
  },
  middleware: (getDefaultMidleware) => getDefaultMidleware().concat(postApi.middleware),
});

setupListeners(store.dispatch);

export type TypePostState = ReturnType<typeof store.getState>;
export const useTypedPostSelector: TypedUseSelectorHook<TypePostState> = useSelector;