import { createSlice } from '@reduxjs/toolkit';
import { getAllPosts } from './actions';
import { IInitialState } from './types';

const postListSlice = createSlice({
  name: 'postList',
  initialState: {
    posts: [],
  } as IInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllPosts.fulfilled, (state, { payload }: { payload: unknown[] }) => {
      console.log('payload', payload);
      state.posts = payload;
    });
  },
});

export default postListSlice.reducer;
