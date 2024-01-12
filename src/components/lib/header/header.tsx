'use client';

import React from 'react';
import { motion } from 'framer-motion';

type HeaderParams = {
  text: {
    title_text: { main?: Boolean; text: string }[];
    sub_title_text: string;
    main_text_color: string;
    main_text_after: string;
  };
  buttons: {
    btn_one_text: string;
    btn_one_border?: string;
    btn_one_action?: () => void;
    btn_two_text: string;
    btn_two_action?: () => void;
    btn_two_hover_bg: string;
  };
  theme: {
    color: string;
    bg_img: string;
    socials?: Boolean;
    title_blend?: Boolean;
  };
};

const HeaderComponent: React.FC<HeaderParams> = ({ text, buttons, theme }) => {
  const levels = {
    btn_one_border: `border-${theme.color}-500`,
    btn_two_hover_bg: `hover:bg-${theme.color}-600`,
  };
  return (
    <header
      className={`w-full h-screen ${theme.bg_img} bg-center bg-cover flex items-start md:items-center justify-center gap-3 flex-col py-10 px-6 lg:px-12`}
    >
      {/* -- NEW H! */}
      <motion.h1
        className={`text-white text-5xl md:text-7xl  font-bold w-msx drop-shadow-lg ${
          theme.title_blend && 'mix-blend-exclusion'
        }`}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ easee: 'easeOut', duration: 0.3 }}
        initial={{ opacity: 0, y: 60 }}
      >
        {text.title_text.map((txt, idx) => {
          // ======= add the ordinary texts and if it is not the last text add a space for the next text -->
          if (!txt.main)
            return `${txt.text} ${
              text.title_text.length !== idx + 1 ? ' ' : ''
            }`;
          // ======= add main string with highlight -->
          else
            return (
              <motion.b
                className={`after:w-[110%] after:h-3 ${text.main_text_after} relative after:absolute after:bottom-3 z-20 after:-z-10 after:-left-3 rounded-lg drop-shadow-x ${text.main_text_color}`}
                key={idx}
              >
                {txt.text}&nbsp;
              </motion.b>
            );
        })}
      </motion.h1>
      <motion.h3
        className='text-gray-100/90 text-base lg:text-lg w-3/4 mt-2 lg:w-1/2 md:text-center text-left'
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          easee: 'easeOut',
          duration: 0.5,
          delay: 0.15,
          type: 'spring',
          damping: 8,
        }}
        initial={{ opacity: 0, y: 60 }}
      >
        {text.sub_title_text}
      </motion.h3>

      {/* -- button section */}
      <section className='mt-12 w-full md:w-max flex items-center flex-wrap gap-4 lg:gap-6 text-sm md:text-base'>
        <motion.button
          className={`text-white rounded-md shadow-lg bg-white/20 py-2 px-8 hover:bg-white/90 hover:text-gray-800 transition-colors ease-out duration-300 ring-0 outline-none border-0 ${buttons.btn_one_border}`}
          whileHover={{
            scale: 1.02,
            boxShadow: '10px 10px 0 rgba(0, 0, 0, 0.2)',
          }}
          whileTap={{ scale: 0.95 }}
          onClick={buttons.btn_one_action}
        >
          {buttons.btn_one_text}
        </motion.button>
        <motion.button
          className={`text-white border border-white/70 hover:border-none rounded-md shadow-lg py-2 px-8 ${buttons.btn_two_hover_bg} duration-300 ease-out`}
          whileHover={{
            scale: 1.02,
            boxShadow: '10px 10px 0 rgba(0, 0, 0, 0.2)',
          }}
          whileTap={{ scale: 0.95 }}
          onClick={buttons.btn_two_action}
        >
          {buttons.btn_two_text}
        </motion.button>
      </section>
    </header>
  );
};

export default HeaderComponent;
