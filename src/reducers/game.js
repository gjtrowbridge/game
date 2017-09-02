import { UPDATE_GAME_STATE } from 'Actions/game';

const defaultState = {
  rows: 5,
  columns: 5,
};

export default function gameStateReducer(state = defaultState, action) {
  if (action.type === UPDATE_GAME_STATE) {
    return action.payload;
  }

  return state;
}
