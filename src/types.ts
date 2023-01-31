import { rootReducer } from './store/root-reducer';
import { store } from './store/store';

/*Данные*/
export type CatalogElementSchema = {
  image: string,
  filesize: number,
  timestamp: number,
  category: string,
}

export type CatalogSchema = CatalogElementSchema[];

export type CatalogElementStoreSchema = {
  id: number,
  image: string,
  filesize: number,
  timestamp: number,
  category: string,
}

export type CatalogStoreSchema = CatalogElementStoreSchema[];

/*Хранилище*/
export type AppDispatch = typeof store.dispatch;
export type State = ReturnType<typeof store.getState>;
export type Reducer = ReturnType<typeof rootReducer>;

/*Слайсы*/
export type AppData = {
  isLoading: boolean,
  catalog: CatalogStoreSchema,
  categories: string[],
}

export type PageData = {
  rowsCount: number,
  columnsCount: number,
  totalCount: number,
  pagesCount: number,
}