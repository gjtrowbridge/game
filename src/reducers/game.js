import { UPDATE_GAME_STATE } from 'Actions/game';

const defaultState = {
  rows: 5,
  columns: 5,
  items: [
    {
      row: 4,
      column: 3,
      type: 'hero',
    },
    {
      row: 1,
      column: 2,
      type: 'hero',
    },
    {
      row: 2,
      column: 2,
      type: 'tree',
    },
  ],
};

export default function gameStateReducer(state = defaultState, action) {
  if (action.type === UPDATE_GAME_STATE) {
    return action.payload;
  }

  return state;
}
