class Cell {
  constructor() {
    this.isAlive = false;
  }
  toggleState() {
    this.isAlive = !this.isAlive;
  }
  getNeighbors(board) {
    return board.findNeighbors(this);
  }
}

export default Cell;
