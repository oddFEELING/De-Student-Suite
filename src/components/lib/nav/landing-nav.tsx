'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { classnames } from '@/utils/vclassnames';
import { user_store } from '@/stores/user-store';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const LandingNav = () => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState<Boolean | null>(null);
  const { user } = user_store();

  useEffect(() => {
    function setTheScroll() {
      window && window.scrollY > 20
        ? setIsScrolled(() => true)
        : setIsScrolled(() => false);
    }
    window.addEventListener('scroll', setTheScroll);
    window.addEventListener('focus', setTheScroll);
    window.addEventListener('mousemove', setTheScroll);
    window.addEventListener('load', setTheScroll);

    return () => {
      window.removeEventListener('scroll', setTheScroll);
      window.removeEventListener('focus', setTheScroll);
      window.removeEventListener('mousemove', setTheScroll);
      window.removeEventListener('load', setTheScroll);
    };
  });

  return (
    <nav
      className={classnames(
        'w-full flex items-center px-3 md:px-6 lg:px-14 py-2 fixed transition-all ease-out duration-300 z-50',
        isScrolled ? 'bg-white/90 h-16 shadow-lg' : 'bg-transparent h-24'
      )}
    >
      <p
        className={classnames(
          'flex items-center justify-center text-xl md:text-2xl gap-2 ml-4 font-black cursor-pointer',
          isScrolled ? 'text-gray-800' : ' text-white'
        )}
        onClick={() => router.push('/')}
      >
        {/* @ts-ignore */}
        <lord-icon
          src='https://cdn.lordicon.com/sncsryxo.json'
          trigger='loop'
          colors={`primary:${isScrolled ? '#121331' : '#ffffff'},secondary:${
            isScrolled ? '#6c16c7' : '#a866ee'
          }`}
          style={{ width: '50px', height: '50px' }}
        />
        DSS &nbsp;&nbsp; <b className='hidden md:block font-medium'>|</b>
      </p>

      {/* -- desktop view */}
      <ul className='md:flex items-center justify-center px-3 gap-5 ml-5 hidden'>
        {nav_data.map((item) => (
          <li key={item.title}>
            <Link
              href={item.link}
              className={isScrolled ? 'nav__link-scrolled' : 'nav__link'}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>

      <motion.div
        className='hidden md:flex absolute right-10'
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        whileHover={{
          scale: 1.02,
          boxShadow: '5px 6px 15px rgba(0, 0, 0, 0.15)',
        }}
        whileTap={{ scale: 0.95 }}
      >
        {!user && (
          <button className='py-2 px-8 rounded-md bg-violet-600 text-white text-sm drop-shadow-xl transition-all ease-out duration-300'>
            Sign in
          </button>
        )}
      </motion.div>
    </nav>
  );
};

export default LandingNav;

const nav_data: { link: string; title: string }[] = [
  { link: '/about', title: 'About' },
  { link: '/rotas', title: 'Rotas' },
  { link: '/events', title: 'Events' },
  { link: '/barnie', title: 'Barnie-Bot' },
  { link: '/lounge', title: 'De Lounge' },
];
