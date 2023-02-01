import { CatalogStoreSchema } from '../types';

export const getRowsCount = (columnsCount : number) : number => {
  if(columnsCount >= 4){
    return 3;
  }

  if(columnsCount >= 2){
    return 4;
  }

  return 6;
};

export const getFirstIndex = (page: string, columnsCount: number, rowsCount: number) : number => (+page - 1) * columnsCount * rowsCount;

export const getPageTotalCount = (columnsCount: number, rowsCount: number, elementsCount: number) => Math.ceil(elementsCount / (rowsCount * columnsCount));

export const firstLetterCapitalize = (word : string) : string => {
  const lowerCase = word.toLowerCase();
  return lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
}

export const getTree = (data : CatalogStoreSchema, categories : string[]) => {
  const tree = [];
  for(const category of categories){
    tree.push({
      id: category,
      value: data.filter((image) => image.category === category)
        .map(({id, image}) => ({
          id: id,
          image: image,
          category: category,
        })),
    });
  }

  return [{id: 'Tree', value: tree}];
};
