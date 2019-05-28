import React from 'react';
import { NavLink } from 'react-router-dom';

import { FormattedMessage } from 'react-intl';
import pluginId from '../../pluginId';

function Link({ isTemporary, name, source, to }) {
  return (
    <NavLink to={to}>
      <p>
        <i className="fa fa-caret-square-o-right" />
        <span>{name}</span>
        {!!source && (
          <FormattedMessage id={`${pluginId}.from`}>
            {msg => (
              <span>
                ({msg}: {source})
              </span>
            )}
          </FormattedMessage>
        )}
        {isTemporary && (
          <FormattedMessage id={`${pluginId}.contentType.temporaryDisplay`}>
            {msg => <Span>{msg}</Span>}
          </FormattedMessage>
        )}
      </p>
    </NavLink>
  );
}

export default Link;
