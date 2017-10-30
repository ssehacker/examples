/**
 * Created by zhouyong on 17/10/30.
 */
import React from 'react';
import styles from './MainLayout.css';
import Menu from './Menu';

function MainLayout({ children, location }) {
  return (
    <div className={styles.normal}>
      <Menu location={location} className={styles.myMenu} />
      <div className={styles.content}>
        <div className={styles.main}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
