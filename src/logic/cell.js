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
  getNextState() {
    if (this.isAlive === false) {
      const aliveNeighbors = this.getNeighbors()
        .filter((neighbor) => neighbor.isAlive === true);

      if (aliveNeighbors.length === 3) {
        return true;
      }
    }
    return false;
  }
}

export default Cell;
