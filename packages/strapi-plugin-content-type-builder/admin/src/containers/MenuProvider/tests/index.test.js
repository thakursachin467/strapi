import React from 'react';
import { shallow } from 'enzyme';

import { MenuProvider } from '../index';

describe('<MenuProvider />', () => {
  it('should MenuProvider not crash', () => {
    shallow(<MenuProvider />);
  });
});
