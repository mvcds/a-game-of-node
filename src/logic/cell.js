class Cell {
  constructor() {
    this.isAlive = false;
  }
  toggleState() {
    this.isAlive = !this.isAlive;
  }
}

export default Cell;
