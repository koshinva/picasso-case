import { createSlice } from '@reduxjs/toolkit';
import { IInitialState } from './types';

const postListSlice = createSlice({
  name: 'postList',
  initialState: {
    posts: [],
  } as IInitialState,
  reducers: {},
});

export default postListSlice.reducer;
