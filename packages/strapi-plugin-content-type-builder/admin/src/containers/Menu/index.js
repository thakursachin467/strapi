import React from 'react';

import { useMenu } from '../../containers/MenuProvider';

import NavMenu from '../../components/NavMenu';

function Menu() {
  const { models, groups } = useMenu();

  const menuItems = [
    {
      title: 'Models',
      links: models,
    },
    {
      title: 'Groups',
      links: groups,
    },
  ];

  return <NavMenu menuItems={menuItems} />;
}

export default Menu;
