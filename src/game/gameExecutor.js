const Game = require('../game/game').Game;
const items = require('../game/items');

// Return a random integer, incl. of min and max
const getRandomInt = function getRandomInt(min = 0, max = 9) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const game = new Game(10, 10);
const hero = new items.Hero(0, 0);

game.addItem(hero);
for (let column = 1; column < game.columns; column += getRandomInt(2, 3)) {
  const gapRow = getRandomInt(0, 9);
  for (let row = 0; row < game.rows; row++) {
    if (row !== gapRow) {
      game.addItem(new items.Tree(row, column));
    }
  }
}

const directions = {
  NORTH: [-1, 0],
  EAST: [0, 1],
  SOUTH: [1, 0],
  WEST: [0, -1],
};

const executeTurn = function executeTurn(instr) {
  if (typeof instr !== 'string') {
    return game;
  }
  const instruction = instr.toUpperCase();

  let diff = [0, 0];
  if (instruction in directions) {
    diff = directions[instruction];
  }
  const newRow = Math.min(Math.max(diff[0] + hero.row, 0), game.rows - 1);
  const newColumn = Math.min(Math.max(diff[1] + hero.column, 0), game.columns - 1);
  game.moveItem(hero.id, newRow, newColumn);
  return game;
};

module.exports = {
  executeTurn,
  game,
};
