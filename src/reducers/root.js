import { combineReducers } from 'redux';
import githubUserInfo from 'Reducers/githubUserInfo';

const rootReducer = combineReducers({
  githubUserInfo,
});

export default rootReducer;
