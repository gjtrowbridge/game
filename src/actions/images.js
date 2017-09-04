import { getAction } from 'Actions/actions';

export const IMAGE_IS_LOADED = 'IMAGE_IS_LOADED';

// Indicates when the hidden images in the HTML are loaded and available to use in the canvas
export const imageIsLoaded = function imageIsLoaded(imgName, imgElement) {
  return getAction(IMAGE_IS_LOADED, {
    name: imgName,
    element: imgElement,
  });
};
