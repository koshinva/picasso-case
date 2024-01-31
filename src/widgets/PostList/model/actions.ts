import { createAsyncThunk } from '@reduxjs/toolkit';
import { instancePlaceholder } from '@shared/index';
import { AxiosError } from 'axios';

export type KnownError = {
  message: string;
  description: string;
  code: number | undefined;
};

export const getAllPosts = createAsyncThunk<unknown[], undefined, object>(
  'posts/all',
  async function (_, thunkApi) {
    try {
      const response = await instancePlaceholder.get<unknown[]>('/posts');
      return response.data;
    } catch (err) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const error: AxiosError<KnownError> = err as any;
      if (!error.response) {
        throw err;
      }
      return thunkApi.rejectWithValue(error.response.data);
    }
  }
);
