import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { AppData } from '../../types';
import { fetchDataAction } from '../api-actions';

const initialState : AppData = {
  isLoading: false,
  catalog: [],
  currentPage: 0,
  categories: [],
}

export const appData = createSlice({
  name: NameSpace.AppData,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchDataAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchDataAction.fulfilled, (state, action) => {
        const catalogData = action.payload;
        const categories : Set<string> = new Set();

        state.catalog = catalogData;
        
        for(let i = catalogData.length - 1; i >= 0; i--){
          categories.add(catalogData[i].category);  
        }

        state.categories = Array.from(categories.values()).reverse();
        state.isLoading = false;
      });
  },
});