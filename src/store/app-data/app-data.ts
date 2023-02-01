import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, SortType } from '../../const';
import { getClosedImages } from '../../services/local-storage';
import { AppData } from '../../types';
import { getTree } from '../../utils/utils';
import { fetchDataAction } from '../api-actions';

const initialState : AppData = {
  isLoading: false,
  catalog: [],
  catalogUnsorted: [],
  categories: [],
  sort: SortType.None,
}

export const appData = createSlice({
  name: NameSpace.AppData,
  initialState,
  reducers: {
    removeItem: (state, action) => {
      const deleteIndex = state.catalog.findIndex((image) => action.payload === image.image);
      state.catalog.splice(deleteIndex, 1);
    },
    setSort: (state, action) => {
      const sortType = action.payload;
      state.sort = sortType;
      switch (state.sort) {
        case SortType.Category : {
          state.catalog.sort((a, b) => {
            if(a.category > b.category){
              return 1;
            }

            if(a < b){
              return - 1;
            }

            return 0;
          });
          break;
        }
        case SortType.Name : {
          state.catalog.sort((a, b) => {
            if(a.image > b.image){
              return 1;
            }

            if(a < b){
              return - 1;
            }

            return 0;
          });
          break;
        }
        case SortType.Date : {
          state.catalog.sort((a, b) => a.timestamp - b.timestamp);
          break;
        }
        case SortType.Size : {
          state.catalog.sort((a, b) => a.filesize - b.filesize);
          break;
        }
        default : {
          state.catalog = state.catalogUnsorted;
          break;
        }
      }
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
            const categoryIndex = catalogData[i].image.indexOf('/');
            storeCatalogData.unshift({
              ...catalogData[i],
              image: catalogData[i].image.slice(categoryIndex + 1),
              id: i + 1,
            })  
          }
        }

        state.catalog = storeCatalogData;
        state.catalogUnsorted = storeCatalogData;
        state.categories = Array.from(categories.values()).reverse();
        state.isLoading = false;
        state.sort = SortType.None;
      });
  },
});

export const {removeItem, setSort} = appData.actions;
