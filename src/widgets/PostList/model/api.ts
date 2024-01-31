import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '@shared/const/const';
import { IPost } from './types';

export const postApi = createApi({
  reducerPath: 'post',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['Post'],
  endpoints: (build) => ({
    fetchAllPosts: build.query<IPost[], { limit: number; start: number }>({
      query: ({ limit = 5, start = 0 }) => ({
        url: '/posts',
        params: {
          _limit: limit,
          _start: start,
        },
      }),
      providesTags: ['Post'],
    }),
    fetchPostById: build.query<IPost, number>({
      query: (id: number = 1) => ({
        url: `/posts/${id}`,
      }),
    }),
  }),
});

export const { useFetchAllPostsQuery, useFetchPostByIdQuery } = postApi;
