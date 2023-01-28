import axios, { AxiosInstance } from 'axios';

const URL_API = 'http://contest.elecard.ru/frontend_data/';

const REQUEST_TIMEOUT = 5000;

export const createAPI = () : AxiosInstance => {
  const api = axios.create({
    baseURL: URL_API,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.response.use((response) => response);

  return api;
};