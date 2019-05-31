/**
 *
 * NavMenu
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { isArray } from 'lodash';
import cn from 'classnames';

import pluginId from '../../pluginId';

import Link from '../Link';
import StyledNavMenu from './StyledNavMenu';

function NavMenu({ menuItems }) {
  const renderLinks = items => {
    const links = items.map(model => {
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

  const renderContent = (item, customLink) => {
    return isArray(item) ? (
      <ul className="menu-list">
        {renderLinks(item)}
        <li>{customLink}</li>
      </ul>
    ) : (
      item
    );
  };

  return (
    <StyledNavMenu className={cn('col-md-3')}>
      {menuItems.map(item => {
        const { title, titleId, links, customLink } = item;
        return (
          <section key={title}>
            <h3>
              <FormattedMessage id={titleId} />
            </h3>
            {renderContent(links, customLink)}
          </section>
        );
      })}
    </StyledNavMenu>
  );
}

NavMenu.defaultProps = {
  menuItems: [],
};

NavMenu.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      links: PropTypes.oneOfType([PropTypes.array, PropTypes.node]),
    }),
  ),
};

export default NavMenu;
