import { expect } from 'chai';
//import sinon from 'sinon';
import Cell from './cell';

describe('Cell', () => {
  describe('#toogle', () => {

    let cell;

    beforeEach(() => {
      cell = new Cell();
    });

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
    //it('Has as many neighbors its board says');
    //it('Get all its neighbors\' status');
  });

  describe('#willBeAliveOnNext', () => {
    describe('Dead cell', () => {
      //it('Reborns');
      //it('Keeps dead');
    });

    describe('Alive cell', () => {
      //it('Dies by solitude');
      //it('Dies by overpopulation');
      //it('Keeps alive');
    });
  });
});
