import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  images: [],
};
export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_IMAGES:
      return { ...state, images: [payload] };
    default:
      return state;
  }
};
