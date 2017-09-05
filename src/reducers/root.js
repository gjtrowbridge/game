import { combineReducers } from 'redux';
import app from 'Reducers/app';
import game from 'Reducers/game';
import images from 'Reducers/images';

const rootReducer = combineReducers({
  app,
  game,
  images,
});

export default rootReducer;
