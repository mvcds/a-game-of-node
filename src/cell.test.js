import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Cell from './cell';

describe('Cell', () => {
  describe('React', () => {
    it('Has a class indicating it is a cell', () => {
      const wrapper = shallow(<Cell isAlive={false} onToggle={() => {}} />);

      expect(wrapper.hasClass('cell')).to.equal(true);
    });
    it('Has a class indicating it is alive', () => {
      const wrapper = shallow(<Cell isAlive onToggle={() => {}} />);

      expect(wrapper.hasClass('cell--alive')).to.equal(true);
    });
  });

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
