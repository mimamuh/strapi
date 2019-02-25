/*
 *
 * LeftMenu
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import LeftMenuHeader from '../../components/LeftMenuHeader';
import LeftMenuLinkContainer from '../../components/LeftMenuLinkContainer';
import LeftMenuFooter from '../../components/LeftMenuFooter';

import styles from './styles.scss';

function LeftMenu(props) {
  return (
    <div className={styles.leftMenu}>
      <LeftMenuHeader />
      <LeftMenuLinkContainer key="leftMenuLinkContainer" {...props} /> 
      <LeftMenuFooter plugins={props.plugins} version={props.version} />
    </div>
  );
}

LeftMenu.defaultProps = {
  version: '3',
};

LeftMenu.propTypes = {
  plugins: PropTypes.object.isRequired,
  version: PropTypes.string,
};

export default LeftMenu;
