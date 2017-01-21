import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';

import Leaderboard from '../../src/components/Leaderboard';

const { renderIntoDocument } = TestUtils;

describe('Leaderboard', () => {
  it('should exist in document', () => {
    const component = renderIntoDocument(<Leaderboard />);

    expect(component).to.exist;
  });
});
