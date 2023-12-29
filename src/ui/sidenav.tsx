'use client'

import Link from 'next/link';
import React, { useState } from 'react';
import NavLinks from '@/ui/nav-links';
import Mainpage from '@/ui/maindiv';
import styles from "@/styles/sidenav.module.scss";

const links = [
  { name: '김우진', href: '/kimwoojin' },
  { name: '김현', href: '/kimhyun' },
  { name: '방승희', href: '/bangseunghui' },
  { name: '변호녕', href: '/ByeonHonyeong' },
  { name: '소사무엘', href: '/SoSamuel' },
  { name: '송영준', href: '/song' },
  { name: '신동현', href: '/sin' },
  { name: '오승민', href: '/oh' },
  { name: '유승민', href: '/ou' },
  { name: '윤준현', href: '/oun' },
  { name: '이민구', href: '/lee' },
  { name: '이유안', href: '/leeou' },
  { name: '이채이', href: '/leecha' },
  { name: '정영식', href: '/jung' },
  { name: '최성민', href: '/choi' },
  { name: '최은철', href: '/choien' },
  { name: '홍문기', href: '/hong' },
];


export default function SideNav() {
  const [selectedName, setSelectedName] = useState<string | null>(null);

  const handleSelectName = (name: string) => {
    const isNameValid = links.some((link) => link.name === name);
    if (isNameValid) {
      setSelectedName(name);
    } else {
      console.error('Invalid name:', name);
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.sidelink}>
        <NavLinks onSelectName={handleSelectName} activeName={selectedName} />
      </div>
      <div className={styles.mainpage}>
        <Mainpage onNameSubmit={handleSelectName} />
      </div>
    </div>
  );
}

