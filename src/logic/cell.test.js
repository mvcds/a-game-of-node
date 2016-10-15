import React from 'react';
import { expect } from 'chai';
//import sinon from 'sinon';
import Cell from './cell'; //(???????????????)

describe('Cell', () => {
  describe('#toogle', () => {
    //it('Starts dead');
    //it('Becomes alive on odd-th toogle');
    //it('Becomes dead on even-th toogle');
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
