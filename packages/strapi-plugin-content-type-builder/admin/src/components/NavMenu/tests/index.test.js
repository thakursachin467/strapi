import React from 'react';
import { shallow } from 'enzyme';

import NavMenu from '../index';

describe('<NavMenu />', () => {
  it('should not crash', () => {
    shallow(<NavMenu />);
  });
});
