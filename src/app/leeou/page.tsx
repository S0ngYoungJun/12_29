import React from 'react';
import styles from "@/styles/index.module.scss";
import SideNav from '@/ui/sidenav';

function Index() {
  
  return (
    <div className={styles.root}>
    <div className={styles.container}>
      <SideNav />
      <div className={styles.content}>
        <div className={styles.box1}>이유안 장점</div>
        <div className={styles.box2}>이유안 단점</div>
        <div className={styles.box3}>이유안 소개</div>
        <div className={styles.box4}>이유안 일대기</div>
      </div>
    </div>
    </div>
  );
}

export default Index;