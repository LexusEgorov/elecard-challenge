import { createSlice } from '@reduxjs/toolkit'
import { NameSpace } from '../../const';
import { getClosedImages } from '../../services/local-storage';
import { PageData } from '../../types';
import { getPageTotalCount, getRowsCount } from '../../utils/utils';
import { fetchDataAction } from '../api-actions';

const initialState : PageData = {
  columnsCount: 1,
  rowsCount: 1,
  totalCount: 1,
  pagesCount: 1,
  cardsCount: 1,
}

export const pageData = createSlice({
  name: NameSpace.PageData,
  initialState,
  reducers: {
    setGridSize: (state, action) => {
      const columnsCount = action.payload > 0 ? action.payload : 1; 
      state.columnsCount = columnsCount;
      state.rowsCount = getRowsCount(columnsCount);
      state.totalCount = columnsCount * state.rowsCount;
      state.pagesCount = getPageTotalCount(state.columnsCount, state.rowsCount, state.cardsCount);
    },
    closeCard: (state) => {
      state.cardsCount--;
      state.pagesCount = getPageTotalCount(state.columnsCount, state.rowsCount, state.cardsCount);
    }
  },
  extraReducers(builder) {
    builder.addCase(fetchDataAction.fulfilled, (state, action) => {
      const closedCardsCount = getClosedImages().length;
      state.cardsCount = action.payload.length - closedCardsCount;
      state.pagesCount = getPageTotalCount(state.columnsCount, state.rowsCount, state.cardsCount)
    });
  },
});

export const {setGridSize, closeCard} = pageData.actions;
