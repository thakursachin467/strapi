import React from 'react';
import PropTypes from 'prop-types';
import { shallow, mount } from 'enzyme';

import MenuProvider from '../../MenuProvider';
import Menu, { getSectionTitle } from '../index';

const renderCompo = (context = { models: [] }) => (
  <MenuProvider value={context}>
    <Menu />
  </MenuProvider>
);

describe('Menu', () => {
  it('Should not crash', () => {
    const context = {
      models: [],
    };
    renderCompo(context);
  });

  it('Should change search on click', () => {
    const context = {
      history: { push: jest.fn() },
    };
    renderCompo(context);
  });
  it('should return a plural string for the user', () => {
    expect(getSectionTitle('model', [])).toContain('singular');
  });
});
