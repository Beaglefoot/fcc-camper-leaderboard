import React from 'react';
import sinon from 'sinon';
import { mount } from 'enzyme';
import { expect } from 'chai';

import Leaderboard from '../../src/components/Leaderboard';

describe('<Leaderboard />', () => {
  it('should exist in document', () => {
    const wrapper = mount(<Leaderboard />);
    expect(wrapper).to.exist;
  });

  it('should call componentDidMount', () => {
    sinon.spy(Leaderboard.prototype, 'componentDidMount');
    mount(<Leaderboard />);
    expect(Leaderboard.prototype.componentDidMount.calledOnce).to.equal(true);
  });

  it('should have 100 camper records after mount', done => {
    sinon.spy(Leaderboard.prototype, 'setState');

    const wrapper = mount(<Leaderboard />);
    const intervalID = setInterval(() => {
      if (Leaderboard.prototype.setState.calledTwice) {
        expect(wrapper.find('tbody tr')).to.have.length(100);
        done();
      }
    }, 50);

    setTimeout(() => {
      clearInterval(intervalID);
      done('Fetching data takes too long...');
    }, 1900);
  });
});
