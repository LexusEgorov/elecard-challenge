const CLOSED_IMAGES_KEY_NAME = 'elecard-closed';

export const getClosedImages = () : string[] => {
  const storedImages : string | null = localStorage.getItem(CLOSED_IMAGES_KEY_NAME);
  return storedImages ? JSON.parse(storedImages) : [];
}

export const addClosedImage = (filename : string) : void => {
  const storedImages : string | null = localStorage.getItem(CLOSED_IMAGES_KEY_NAME);
  const parsedImages : string[] = storedImages ? JSON.parse(storedImages) : [];
  if(!parsedImages.includes(filename)){
    parsedImages.push(filename);
    localStorage.setItem(CLOSED_IMAGES_KEY_NAME, JSON.stringify(parsedImages));
  }
}

export const resetImages = () : void => localStorage.removeItem(CLOSED_IMAGES_KEY_NAME);
