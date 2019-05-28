import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import cn from 'classnames';
import pluginId from '../../pluginId';

const CustomLink = ({ onClick }) => (
  <li style={{ color: '#2D3138' }}>
    <span>Add</span>
    {/* <div className={cn(styles.linkContainer, styles.iconPlus)} onClick={onClick}>
      <div>
        <i className="fa fa-plus" />
      </div>
      <span>
        <FormattedMessage id={`${pluginId}.button.contentType.add`} />
      </span>
    </div> */}
  </li>
);

CustomLink.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CustomLink;
