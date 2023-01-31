import { NameSpace } from '../../const';
import { State } from '../../types';

export const getRowsCount = (state: State) : number => state[NameSpace.PageData].rowsCount;

export const getColumnsCount = (state: State) : number => state[NameSpace.PageData].columnsCount;

export const getTotalCount = (state: State) : number => state[NameSpace.PageData].totalCount;

export const getPagesCount = (state: State) : number => state[NameSpace.PageData].pagesCount;
