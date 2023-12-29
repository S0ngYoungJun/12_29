import React from 'react';
import styles from "@/styles/index.module.scss";
import SideNav from '@/ui/sidenav';

function Index() {
  
  return (
    <div className={styles.root}>
    <div className={styles.container}>
      <div className={`${styles.div1}`}>
      <SideNav />
        </div>
      <div className={`${styles.div2}`}></div>
    </div>
    </div>
  );
}

export default Index;