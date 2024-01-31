import axios from 'axios';
import { BASE_URL } from '@shared/const/const';

export const instancePlaceholder = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});