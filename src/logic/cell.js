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

    return (aliveNeighbors === 3
      || (aliveNeighbors >= 2 && aliveNeighbors <= 3));
  }
}

export default Cell;
