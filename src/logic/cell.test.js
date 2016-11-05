import { expect } from 'chai';
import sinon from 'sinon';
import Cell from './cell';

describe('Cell', () => {
  let cell;
  let board;

  beforeEach(() => {
    board = {
      findNeighbors: sinon.mock(),
    };
    cell = new Cell(board);
  });

  describe('#toogle', () => {
    it('Starts dead', () => {
      expect(cell.isAlive).to.equal(false);
    });

    it('Go to next state on First Click', () => {
      cell.toggleState();

      expect(cell.isAlive).to.equal(true);
    });

    it('Go to the first state on Second Click', () => {
      cell.toggleState();
      cell.toggleState();

      expect(cell.isAlive).to.equal(false);
    });
  });

  describe('#getNeighbors', () => {
    it('Has as many neighbors its board says', () => {
      //Cell is on position [0,0]

      board.findNeighbors
        .withArgs(cell)
        .returns([1, 3, 4]);

      expect(cell.getNeighbors().length).to.equal(3);
    });
  });

  describe('#getNextState', () => {
    describe('Dead cell', () => {
      [0, 1, 2, 3, 4, 5, 6, 7, 8].forEach((n) => {
        const expectValue = n === 3;
        const aliveCells = [];

        for (let i = 0; i < 8; i++) {
          aliveCells.push({ isAlive: i < n });
        }

        it(`Reborn or Keeps dead, testing with ${n} neighbors`, () => {
          board.findNeighbors
            .withArgs(cell)
            .returns(aliveCells);

          expect(cell.getNextState()).to.equal(expectValue);
        });
      });
    });

    describe('Alive cell', () => {
      beforeEach(() => {
        cell.toggleState();
      });

      it('Dies by solitude', () => {
        board.findNeighbors
          .withArgs(cell)
          .returns([
            { isAlive: true }]);

        expect(cell.getNextState()).to.equal(false);
      });
      it('Dies by overpopulation', () => {
        board.findNeighbors
          .withArgs(cell)
          .returns([
            { isAlive: true },
            { isAlive: true },
            { isAlive: true },
            { isAlive: true }]);

        expect(cell.getNextState()).to.equal(false);
      });
      it('Keeps alive', () => {
        board.findNeighbors
          .withArgs(cell)
          .returns([
            { isAlive: !true },
            { isAlive: true },
            { isAlive: true }]);

        expect(cell.getNextState()).to.equal(true);
      });
    });
  });
});
