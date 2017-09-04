import { combineReducers } from 'redux';
import game from 'Reducers/game';
import images from 'Reducers/images';

const rootReducer = combineReducers({
  game,
  images,
});

export default rootReducer;
