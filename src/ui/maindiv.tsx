'use client'

import React, { useState } from 'react';
import styles from '@/styles/maindiv.module.scss';


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
interface MainpageProps {
  onNameSubmit: (name: string) => void;
}

export default function Mainpage({ onNameSubmit }: MainpageProps) {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    const submittedName = inputValue.trim(); 
    onNameSubmit(submittedName);

    const matchedLink = links.find((link) => link.name === submittedName);

    if (matchedLink) {
      window.location.href = matchedLink.href;
    } else {
      window.location.href = '/fail';
    }
  };


  return (
    <div className={styles.main}>
      <div className={styles.name}>
      </div>
      <div className={styles.show}>
        <input
        className={styles.input}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Write your name..."
        />
        <button className={styles.button}
        onClick={handleSubmit}>SHOW</button>
      </div>
    </div>
  );
}