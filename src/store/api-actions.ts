import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance, AxiosResponse } from 'axios';
import { APIRoute } from '../const';
import { AppDispatch, CatalogSchema, State } from '../types';

export const fetchDataAction = createAsyncThunk<CatalogSchema, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance,
}>(
  'data/get',
  async (_arg, {extra: api}) => {
    const {data} : AxiosResponse = await api.get<CatalogSchema>(APIRoute.Catalog);

    return data;
  }
);
