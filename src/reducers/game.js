import { UPDATE_GAME_STATE } from 'Actions/game';

const getRandomInt = function getRandomInt(min = 0, max = 10) {
  return Math.floor(Math.random() * (max - min)) + min;
};

const defaultState = {
  rows: 10,
  columns: 10,
  items: [
    {
      row: 1,
      column: 1,
      type: 'hero',
    },
    {
      row: 10,
      column: 10,
      type: 'goal',
    },
  ],
};
for (let i = 0; i < 40; i++) {
  defaultState.items.push({
    row: getRandomInt(),
    column: getRandomInt(),
    type: 'tree',
  });
}


export default function gameReducer(state = defaultState, action) {
  if (action.type === UPDATE_GAME_STATE) {
    return action.payload;
  }

  return state;
}
