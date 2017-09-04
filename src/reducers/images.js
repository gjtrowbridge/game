import { IMAGE_IS_LOADED } from 'Actions/images';

export default function imageReducer(state = {}, action) {
  if (action.type === IMAGE_IS_LOADED) {
    return {
      ...state,
      [action.payload.name]: action.payload.element,
    };
  }

  return state;
}
