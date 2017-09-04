import { UPDATE_GAME_STATE } from 'Actions/game';

// Return a random integer, incl. of min and max
const getRandomInt = function getRandomInt(min = 0, max = 9) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const defaultState = {
  rows: 10,
  columns: 10,
  items: [
    {
      row: 0,
      column: 0,
      type: 'hero',
    },
  ],
};
for (let column = 1; column < defaultState.columns; column += getRandomInt(2, 3)) {
  const gapRow = getRandomInt(0, 9);
  for (let row = 0; row < defaultState.rows; row++) {
    if (row !== gapRow) {
      defaultState.items.push({
        row,
        column,
        type: 'tree',
      });
    }
  }
  if (column === defaultState.columns - 1) {
    defaultState.items.push({
      gapRow,
      column,
      type: 'goal',
    });
  }
}


export default function gameReducer(state = defaultState, action) {
  if (action.type === UPDATE_GAME_STATE) {
    return action.payload;
  }

  return state;
}
