export const URL_API = 'http://contest.elecard.ru/frontend_data/';

export enum APIRoute {
  Catalog = 'catalog.json',
}

export enum NameSpace {
  AppData = 'APP_DATA',
  PageData = 'PAGE_DATA',
}

export enum AppRoute {
  Root = '/',
  Page = '/:page',
}

export enum SortType {
  None = 'NONE',
  Category = 'CATEGORY',
  Date = 'DATE',
  Name = 'NAME',
  Size = 'SIZE',
}

export enum ViewMode {
  Cards = 'CARDS',
  Tree = 'TREE',
}
