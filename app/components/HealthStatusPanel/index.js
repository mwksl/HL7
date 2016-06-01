/**
*
* HealthStatusPanel
*
*/

import React from 'react';
import { Row, Col, Panel } from 'react-bootstrap';

import styles from './styles.css';

function HealthStatusPanel() {
  const title = (
    <div>
      <h3>Health Status</h3>
      <canvas id="myCanvas" width="400" height="400" />
    </div>
  );
  return (
    <div>
      <Row className={styles.healthStatusPanel}>
        <Col lg={12} md={12} sm={12}>
          <Panel header={title} className="mint-panel pn">
            Panel content
          </Panel>
        </Col>
      </Row>
    </div>
  );
}

export default HealthStatusPanel;
