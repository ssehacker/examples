import React from 'react';
import { connect } from 'dva';
import styles from './index.css';
import Day1 from './Day1';
import MainLayout from '../../components/MainLayout/MainLayout';

function day1({ location }) {
  return (
    <MainLayout location={location}>
      <div className={styles.normal}>
        <Day1 />
      </div>
    </MainLayout>
  );
}

export default connect()(day1);
