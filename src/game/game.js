class Game {
  constructor(rows, columns) {
    this.rows = rows;
    this.columns = columns;
    // items is a hash of all boardItems in play, indexed by ID
    this.items = {};

    // board contains a 2-d array of all board cells
    // each cell is represented by a hash of all contained items, indexed by item ID
    this.board = [];
    for (let row = 0; row < rows; row++) {
      const newRow = [];
      for (let column = 0; column < columns; column++) {
        newRow.push({});
      }
      this.board.push(newRow);
    }
  }
  addItem(item) {
    this.items[item.id] = item;
    this._addItemToBoard(item);
  }
  moveItem(itemId, newRow, newColumn) {
    const item = this.items[itemId];

    this._removeItemFromBoard(item);
    item.row = newRow;
    item.column = newColumn;
    this._addItemToBoard(item);
  }

  _addItemToBoard(item) {
    this.board[item.row][item.column][item.id] = item;
  }
  _removeItemFromBoard(item) {
    delete this.board[item.row][item.column][item.id];
  }

  toHash() {
    return JSON.parse(JSON.stringify(this));
  }
}

module.exports = {
  Game,
};
