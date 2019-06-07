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
  const renderLinks = (param, items) => {
    const links = items.map(model => {
      const { isTemporary, name, source } = model;
      const base = `/plugins/${pluginId}/${param}/${name}`;
      const to = source ? `${base}&source=${source}` : base;

      return (
        <li key={name}>
          <Link
            key={name}
            isTemporary={isTemporary}
            name={name}
            source={source}
            to={to}
          />
        </li>
      );
    });

    return links;
  };

  const renderContent = item => {
    const { customLink, links, title } = item;

    return isArray(links) ? (
      <ul className="menu-list">
        {renderLinks(title, links)}
        <li>{customLink}</li>
      </ul>
    ) : (
      links
    );
  };

  return (
    <StyledNavMenu className={cn('col-md-3')}>
      {menuItems.map(item => {
        const { title, titleId } = item;
        const itemTitle = title || titleId;

        return (
          <section key={itemTitle}>
            <h3>{!!titleId ? <FormattedMessage id={titleId} /> : title}</h3>
            {renderContent(item)}
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
      title: PropTypes.string.isRequired,
      titleId: PropTypes.string,
      links: PropTypes.oneOfType([PropTypes.array, PropTypes.node]),
      customLink: PropTypes.node,
    })
  ),
};

export default NavMenu;
