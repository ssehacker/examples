import React from 'react';
import { connect } from 'dva';
import styles from './index.css';
import Day03 from './Day03';
import MainLayout from '../../components/MainLayout/MainLayout';

function day03({ location }) {
  return (
    <MainLayout location={location}>
      <div className={styles.normal}>
        <Day03 />
      </div>
    </MainLayout>
  );
}

export default connect()(day03);
