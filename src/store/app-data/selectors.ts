import { createSelector } from 'reselect';
import { NameSpace } from '../../const';
import { CatalogStoreSchema, State } from '../../types';
import { getFirstIndex, getRowsCount } from '../../utils/utils';

export const getIsLoading = (state: State) : boolean => state[NameSpace.AppData].isLoading;

export const getCatalog = (state: State) : CatalogStoreSchema => state[NameSpace.AppData].catalog;

export const getCategories = (state: State) : string[] => state[NameSpace.AppData].categories;

export const getCatalogLength = (state: State) : number => state[NameSpace.AppData].catalog.length;

export const getPageData = (page: string, columnsCount: number) => createSelector([
  getCatalog,
], (catalog) => {
  const rowsCount = getRowsCount(columnsCount); 
  const firstIndex = getFirstIndex(page, columnsCount, rowsCount);
  return catalog.slice(firstIndex, firstIndex + columnsCount * rowsCount);
});
