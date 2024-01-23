'use client';

import React from 'react';
import BarnieLottie from '@assets/lotties/lounge-lottie.json';
import Lottie from 'lottie-react';
import HeaderComponent from '@/components/lib/header/header';

const LoungePage = () => {
  return (
    <main className='landing__page'>
      {/* -- Hero section */}
      <HeaderComponent
        text={{
          title_text: [
            { text: 'Comfort, Freedom... ' },
            { main: true, text: 'De Lounge' },
          ],
          sub_title_text:
            'Just a simple site built in an attempt to optimize student work and manage student events.',
          main_text_after: `after:bg-violet-600`,
          main_text_color: `text-violet-200`,
        }}
        buttons={{
          btn_one_text: 'What can I do here?',
          btn_two_text: 'Rotas',
          btn_one_border: 'border-violet-300',
          btn_two_hover_bg: 'hover:bg-violet-600',
        }}
        theme={{
          color: 'violet',
          bg_img: 'bg-contact-hero-bg',
          title_blend: true,
        }}
      />

      <section className='w-full h-screen py-10 text-center px-8 flex flex-col gap-12 items-center justify-center bg-white relative overflow-hidden'>
        <div className='w-full max-w-6xl h-max py-20 border-2 flex border-gray-300 flex-col border-dashed rounded-lg items-center justify-center gap-4'>
          <Lottie animationData={BarnieLottie} className='w-56 h-56' />
          <p className='text-gray-800 text-xl'>De-Lounge is coming soon...</p>
        </div>
      </section>
    </main>
  );
};

export default LoungePage;
