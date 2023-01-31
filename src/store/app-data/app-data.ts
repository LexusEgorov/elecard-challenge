import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { getClosedImages } from '../../services/local-storage';
import { AppData } from '../../types';
import { fetchDataAction } from '../api-actions';

const initialState : AppData = {
  isLoading: false,
  catalog: [],
  categories: [],
}

export const appData = createSlice({
  name: NameSpace.AppData,
  initialState,
  reducers: {
    removeItem: (state, action) => {
      const deleteIndex = state.catalog.findIndex((image) => action.payload === image.image);
      state.catalog.splice(deleteIndex, 1);
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchDataAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchDataAction.fulfilled, (state, action) => {
        const closedImages = getClosedImages();
        const catalogData = action.payload;
        const categories : Set<string> = new Set();

        let storeCatalogData = [];
        
        for(let i = catalogData.length - 1; i >= 0; i--){
          if(!closedImages.includes(catalogData[i].image)){
            categories.add(catalogData[i].category);
            storeCatalogData.unshift({
              ...catalogData[i],
              id: i + 1,
            })  
          }
        }

        state.catalog = storeCatalogData;
        state.categories = Array.from(categories.values()).reverse();
        state.isLoading = false;
      });
  },
});

export const {removeItem} = appData.actions;
