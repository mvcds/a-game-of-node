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
    const aliveNeighbors = this.getNeighbors()
        .filter((neighbor) => neighbor.isAlive === true)
        .length;

    return ((this.isAlive === false && aliveNeighbors === 3)
      || (this.isAlive && aliveNeighbors >= 2 && aliveNeighbors <= 3));
  }
}

export default Cell;
