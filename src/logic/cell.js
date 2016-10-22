class Cell {
  constructor(board) {
    this.isAlive = false;
    this.board = board;
  }
  toggleState() {
    this.isAlive = !this.isAlive;
  }
  getNeighbors() {
    return this.board.findNeighbors(this);
  }
}

export default Cell;
