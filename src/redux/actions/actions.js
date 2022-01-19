import { ActionTypes } from "../constants/actionTypes";
export const setImages = (images) => {
  return {
    type: ActionTypes.SET_IMAGES,
    payload: images,
  };
};
