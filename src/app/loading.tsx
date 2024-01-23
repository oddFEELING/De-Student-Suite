'use client';

import React from 'react';
import Lottie from 'lottie-react';
import LoadingLottie from '@lotties/loading-lottie.json';

const Loading = () => {
  return (
    <div className='w-full h-screen flex flex-col gap-5 items-center justify-center px-10 py-32'>
      <Lottie
        animationData={LoadingLottie}
        className='w-full md:w-2/3 lg:w-1/3 h-2/3'
      />
      <p className='text-2xl text-gray-800'> Loading...</p>
    </div>
  );
};

export default Loading;
