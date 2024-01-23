'use client';
import React from 'react';
import { CgMenuGridR } from 'react-icons/cg';
import { paletteStore } from '@/stores/global-store';

const PaletteButton = () => {
  const { showPalette, setShowPalette } = paletteStore();
  return (
    <>
      {!showPalette && (
        <div
          className='fixed right-0 cursor-grab bg-gray-900 text-white flex items-center justify-center px-2 w-max h-max py-2 top-[50vh] rounded-l-xl shadow border border-gray-50 mix-blend-exclusion hover:shadow-xl transition-all ease-out duration-300'
          onClick={() => setShowPalette(true)}
        >
          {/* <Lottie
              animationData={BarnieLottie}
              className='w-full h-full'
              draggable
            /> */}
          <CgMenuGridR className='text-white w-4 h-4 lg:w-8 lg:h-8' />
        </div>
      )}
    </>
  );
};

export default PaletteButton;
