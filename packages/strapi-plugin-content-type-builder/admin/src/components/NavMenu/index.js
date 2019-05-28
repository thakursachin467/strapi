/**
 *
 * NavMenu
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import pluginId from '../../pluginId';

import Link from '../Link';
import StyledNavMenu from './StyledNavMenu';
import DocumentationSection from '../DocumentationSection';
import CustomLink from '../CustomLink';

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

  return (
    <StyledNavMenu className={cn('col-md-3')}>
      {menuItems.map(item => {
        return (
          <section key={item.title}>
            <h3>{item.title}</h3>
            <ul>{renderLinks(item.links)}</ul>
            <div>
              <CustomLink onClick={() => {}} />
            </div>
          </section>
        );
      })}
      <div className="documentation">
        <h3>Documentation</h3>
        <DocumentationSection />
      </div>
    </StyledNavMenu>
  );
}

NavMenu.defaultProps = {
  menuItems: [],
};

NavMenu.propTypes = {
  menuItems: PropTypes.array,
};

export default NavMenu;
