import React from 'react';
import sinon from 'sinon';
import { mount } from 'enzyme';
import { expect } from 'chai';

import Leaderboard from '../../src/components/Leaderboard';

describe('<Leaderboard />', () => {
  console.log('------------------------------');

  it('should exist in document', () => {
    const wrapper = mount(<Leaderboard />);
    expect(wrapper).to.exist;
  });

  it('should call componentDidMount', () => {
    const spy = sinon.spy(Leaderboard.prototype, 'componentDidMount');
    mount(<Leaderboard />);
    expect(spy.calledOnce).to.equal(true);
    Leaderboard.prototype.componentDidMount.restore();
  });

  it('should have 100 camper records at some point in time after mounting', done => {
    const spy = sinon.spy(Leaderboard.prototype, 'setState');

    const wrapper = mount(<Leaderboard />);
    const intervalID = setInterval(() => {
      if (spy.callCount > 1) {
        clearInterval(intervalID);
        expect(wrapper.find('tbody tr')).to.have.length(100);
        Leaderboard.prototype.setState.restore();
        done();
      }
    }, 50);

    setTimeout(() => {
      clearInterval(intervalID);
      Leaderboard.prototype.setState.restore();
      done('Fetching data takes too long...');
    }, 4500);
  });

  it('should fetch new data on switch click', done => {
    const fetchSpy = sinon.spy(Leaderboard.prototype, 'fetchNewState');
    const stateSpy = sinon.spy(Leaderboard.prototype, 'setState');

    const wrapper = mount(<Leaderboard />);
    const initialCount = fetchSpy.callCount;

    const intervalID = setInterval(() => {
      if (stateSpy.calledOnce) {
        clearInterval(intervalID);

        wrapper.find('.switch').last().simulate('click');

        const finalCount = fetchSpy.callCount;
        expect(finalCount - initialCount).to.equal(1);

        Leaderboard.prototype.fetchNewState.restore();
        Leaderboard.prototype.setState.restore();
        done();
      }
    }, 50);

    setTimeout(() => {
      clearInterval(intervalID);
      Leaderboard.prototype.fetchNewState.restore();
      Leaderboard.prototype.setState.restore();
      done('Fetching data takes too long...');
    }, 4500);
  });
});
