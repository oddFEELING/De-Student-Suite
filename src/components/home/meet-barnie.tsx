'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import BarnieLottie from '@lotties/barnie-lottie-1.json';

const MeetBarnie: React.FC = () => {
  return (
    <div className='bg-gray-900 w-full max-w-7xl lg:w-[80%] lg:rounded-3xl lg:shadow-2xl my-10'>
      <div className='mx-auto max-w-6xl px-6 py-20 sm:py-28 lg:px-8 relative'>
        <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
          Meet your dedicated AI partner.
          <br />
          <b className='text-violet-200'>Barnie-Bot.</b>
        </h2>
        <div className='mt-14 flex items-center gap-x-6'>
          <motion.button
            className='py-3 px-8 rounded-md bg-violet-600 text-white text-sm drop-shadow-xl transition-all ease-out duration-300'
            whileHover={{
              scale: 1.05,
              boxShadow: '5px 6px 15px #c026d3/15',
            }}
            whileTap={{ scale: 0.9 }}
          >
            Say Hi!
          </motion.button>
          <a href='#' className='text-sm font-semibold leading-6 text-gray-100'>
            Learn more <span aria-hidden='true'>→</span>
          </a>
        </div>

        <Lottie
          animationData={BarnieLottie}
          className='absolute hidden md:block -right-24 md:-right-28 xl:-right-44 top-40 xl:top-24 w-72 h-72 xl:w-96 xl:h-96 self-center'
        />
      </div>
    </div>
  );
};

export default MeetBarnie;
