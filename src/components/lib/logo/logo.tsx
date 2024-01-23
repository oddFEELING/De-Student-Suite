'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { classnames } from '@/utils/classnames';

type LogoProps = {
  dark?: boolean;
  sx?: string;
};

const AppLogo = ({ dark = false, sx = '' }: LogoProps) => {
  const router = useRouter();

  return (
    <motion.p
      initial={{ x: -100, opacity: 0 }}
      transition={{ ease: 'easeOut', duration: 0.4 }}
      whileInView={{ opacity: 1, x: 0 }}
      className={classnames(
        sx,
        'flex items-center justify-center text-lg xl:text-xl gap-2 ml-4 font-black cursor-pointer w-max',
        dark ? 'text-gray-800' : ' text-white'
      )}
      onClick={() => router.push('/')}
    >
      {/* @ts-ignore */}
      <lord-icon
        src='https://cdn.lordicon.com/sncsryxo.json'
        trigger='loop'
        colors={`primary:${dark ? '#121331' : '#ffffff'},secondary:${
          dark ? '#6c16c7' : '#a866ee'
        }`}
        style={{ width: '50px', height: '50px' }}
      />
      DSS &nbsp;&nbsp; <b className='hidden md:block font-medium'>|</b>
    </motion.p>
  );
};

export default AppLogo;
