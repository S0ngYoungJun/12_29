'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import styles from '@/styles/navlink.module.scss';
import { useRouter } from 'next/router';

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
  { name: '최승민', href: '/choi' },
  { name: '최은철', href: '/choien' },
  { name: '홍문기', href: '/hong' },
];

export default function NavLinks() {
  
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState<{ name: string; href: string } | null>(null);

  useEffect(() => {
    const currentLink = links.find((link) => link.href === pathname);
    setActiveLink(currentLink || null);
  }, [pathname]);

  return (
    <>
      {links.map((link) => (
        <Link key={link.name} href={link.href} className={clsx(styles.linka, { [styles.active]: link === activeLink })} passHref>
            <p className={styles.linkname}>{link.name}</p>
        </Link>
      ))}
    </>
  );
}

