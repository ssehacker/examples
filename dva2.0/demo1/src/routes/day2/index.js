import React from 'react';
import { connect } from 'dva';
import styles from './index.css';
import Day2 from './Day2';
import MainLayout from '../../components/MainLayout/MainLayout';

function day2({ location }) {
  return (
    <MainLayout location={location}>
      <div className={styles.normal}>
        <Day2 />
      </div>
    </MainLayout>
  );
}

export default connect()(day2);
