/*
 *
 * PanelContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectPanelContainer from './selectors';
import styles from './styles.css';

export class PanelContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={ styles.panelContainer }>
      This is PanelContainer container !
      </div>
    );
  }
}

const mapStateToProps = selectPanelContainer();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PanelContainer);
