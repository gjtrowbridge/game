
const TYPE_TREE = 'tree';
const TYPE_HERO = 'hero';
const TYPE_GOAL = 'goal';

let nextBoardItemId = 0;
class BoardItem {
  constructor(row, column, type, otherProperties = {}) {
    this.id = nextBoardItemId;
    nextBoardItemId++;

    this.row = row;
    this.column = column;
    this.type = type;
    this.otherProperties = otherProperties;
  }
}

class Hero extends BoardItem {
  constructor(row, column) {
    super(row, column, TYPE_HERO);
  }
}

class Tree extends BoardItem {
  constructor(row, column) {
    super(row, column, TYPE_TREE);
  }
}

class Goal extends BoardItem {
  constructor(row, column) {
    super(row, column, TYPE_GOAL);
  }
}

module.exports = {
  BoardItem,
  Goal,
  Hero,
  Tree,
};
