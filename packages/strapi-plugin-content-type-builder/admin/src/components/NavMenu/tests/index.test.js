import React from 'react';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';

import NavMenu from '../index';
import Link from '../../Link';

describe('<NavMenu />', () => {
  const defaultProps = {
    menuItems: [
      {
        titleId: 'models',
        links: [
          {
            icon: 'fa-cube',
            name: 'role',
            description: '',
            fields: 6,
            source: 'users-permissions',
            isTemporary: false,
          },
          {
            icon: 'fa-cube',
            name: 'product',
            description: 'super api',
            fields: 6,
            isTemporary: false,
          },
          {
            icon: 'fa-cube',
            name: 'test1',
            description: 'super api',
            fields: 6,
            isTemporary: true,
          },
        ],
      },
      {
        title: 'models',
        links: [
          {
            icon: 'fa-cube',
            name: 'permission',
            description: '',
            fields: 6,
            source: 'users-permissions',
            isTemporary: false,
          },
          {
            icon: 'fa-cube',
            name: 'user',
            description: '',
            fields: 6,
            source: 'users-permissions',
            isTemporary: false,
          },
        ],
      },
    ],
  };
  it('should not crash', () => {
    shallow(<NavMenu />);
  });

  it('should render 5 links in the menu', () => {
    const wrapper = shallow(<NavMenu {...defaultProps} />);
    const links = wrapper.find(Link);

    expect(links).toHaveLength(5);
  });

  it('should render links title as FormattedMessage element if titleId props exists', () => {
    const wrapper = shallow(<NavMenu {...defaultProps} />);

    expect(wrapper.find('section').find(FormattedMessage).prop('id')).toContain('models');
  });

  it('should render links title as string if titleId props does not exist', () => {


    const wrapper = shallow(<NavMenu {...defaultProps} titleId={} />);
    expect(wrapper.find('h3').text()).toEqual('models');
  });
});
