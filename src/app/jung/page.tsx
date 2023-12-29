import React from 'react';
import styles from "@/styles/index.module.scss";
import SideNav from '@/ui/sidenav';

function Index() {
  
  return (
    <div className={styles.root}>
    <div className={styles.container}>
      <SideNav />
      <div className={styles.content}>
        <div className={styles.box1}>정영식 장점</div>
        <div className={styles.box2}>정영식 단점</div>
        <div className={styles.box3}>정영식 소개</div>
        <div className={styles.box4}>정영식 일대기</div>
      </div>
    </div>
    </div>
  );
}

export default Index;