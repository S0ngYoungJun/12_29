'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import styles from '@/styles/navlink.module.scss';

// 페이지 링크 정보 배열
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

interface NavLinksProps {
  onSelectName: (name: string) => void; // 부모 컴포넌트로 선택된 이름을 전달하기 위한 콜백 함수
  activeName: string | null; // 활성화된 링크의 이름을 나타내는 상태
}

export default function NavLinks({ onSelectName, activeName }: NavLinksProps) {
  
  const pathname = usePathname(); // 현재 페이지의 경로를 가져옴
  const [activeLink, setActiveLink] = useState<{ name: string; href: string } | null>(null);

  useEffect(() => {
    // 현재 페이지의 경로에 해당하는 링크를 찾음
    const currentLink = links.find((link) => link.href === pathname);
    setActiveLink(currentLink || null); // 현재 페이지의 링크를 상태에 반영
  }, [pathname]);

  const handleSelectName = (name: string) => {
    // 선택된 이름이 유효한지 확인
    const isNameValid = links.some((link) => link.name === name);
    if (isNameValid) {
      onSelectName(name); // 선택된 이름을 부모 컴포넌트로 전달
    } else {
      console.error('Invalid name:', name); // 유효하지 않은 경우 에러 출력
    }
  };

  return (
    <>
      {links.map((link) => (
        // 각 링크에 대한 Link 컴포넌트를 생성
        // clsx를 사용하여 스타일 클래스를 조건에 따라 동적으로 추가
        <Link
          key={link.name}
          href={link.href}
          className={clsx(styles.linka, { [styles.active]: link === activeLink })}
          onClick={() => handleSelectName(link.name)} // 링크를 클릭할 때 선택된 이름을 전달
          passHref
        >
          <p className={styles.linkname}>{link.name}</p>
        </Link>
      ))}
    </>
  );
}