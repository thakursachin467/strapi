/**
 *
 * NavMenu
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import pluginId from '../../pluginId';
import { useMenu } from '../../containers/MenuProvider';

// UI
import Link from '../Link';
import StyledNavMenu from './StyledNavMenu';

function NavMenu({}) {
  const { models } = useMenu();

  const renderLinks = () => {
    const links = models.map(model => {
      const { isTemporary, name, source } = model;
      const base = `/plugins/${pluginId}/models/${name}`;
      const to = source ? `${base}&source=${source}` : base;

      return (
        <li key={name}>
          <Link key={name} isTemporary={isTemporary} name={name} source={source} to={to} />
        </li>
      );
    });

    return links;
  };

  return (
    <StyledNavMenu className={cn('col-md-3')}>
      <section>
        <h3>Modèles</h3>
        <ul>{renderLinks()}</ul>
      </section>
      <section>
        <h3>Groupes</h3>
      </section>
    </StyledNavMenu>
  );
}

NavMenu.defaultProps = {};

NavMenu.propTypes = {
  models: PropTypes.array.isRequired,
};

export default NavMenu;
