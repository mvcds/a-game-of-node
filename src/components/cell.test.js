import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import Cell from './cell';

describe('React Cell', () => {
  it('Has a class indicating it is a cell', () => {
    const wrapper = shallow(<Cell isAlive={false} onToggle={() => {}} />);

    expect(wrapper.hasClass('cell')).to.equal(true);
  });

  it('Has a class indicating it is alive', () => {
    const wrapper = shallow(<Cell isAlive onToggle={() => {}} />);

    expect(wrapper.hasClass('cell--alive')).to.equal(true);
  });

  it('Has called onToggle', () => {
    const onToggle = sinon.spy();
    const wrapper = shallow(<Cell isAlive={false} onToggle={onToggle} />);

    wrapper.simulate('click');

    expect(onToggle.calledOnce).to.equal(true);
  });
});
