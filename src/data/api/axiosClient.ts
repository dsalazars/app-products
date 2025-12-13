import axios from 'axios';

export const axiosClient = axios.create({
  baseURL: 'https://dummyapi.io/data/v1/',
  timeout: 5000,
});
