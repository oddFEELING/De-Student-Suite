'use client';

import React from 'react';
import { motion } from 'framer-motion';

const HomeTimeLine: React.FC = () => {
  return (
    <div className='bg-white py-24 sm:py-32'>
      {/* -- title */}
      <div className='pb-5 mb-10 mx-auto px-'>
        <p className='text-base font-semibold leading-7 text-violet-600'>
          See what&apos;s going on
        </p>
        <h2 className='mt-2 text-3xl font-bold tracking-tight text-gray-800 sm:text-5xl'>
          De Timeline
        </h2>
      </div>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4'>
          {timeline.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ x: -80, opacity: 0 }}
              transition={{
                ease: 'easeOut',
                duration: 0.3,
                delay: idx * 0.2,
                type: 'spring',
                damping: 9,
                stiffness: 70,
              }}
              whileInView={{ x: 0, opacity: 1 }}
            >
              <time
                dateTime={item.dateTime}
                className='flex items-center text-sm font-semibold leading-6 text-violet-600'
              >
                <svg
                  viewBox='0 0 4 4'
                  className='mr-4 h-1 w-1 flex-none'
                  aria-hidden='true'
                >
                  <circle cx={2} cy={2} r={2} fill='currentColor' />
                </svg>
                {item.date}
                <div
                  className='absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0'
                  aria-hidden='true'
                />
              </time>
              <p className='mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900'>
                {item.name}
              </p>
              <p className='mt-1 text-base leading-7 text-gray-500'>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeTimeLine;

type TimelineType = {
  name: string;
  description: string;
  date: string;
  dateTime: string;
};

const timeline: TimelineType[] = [
  {
    name: 'Founded Idea',
    description:
      'Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae.',
    date: 'Dec 2023',
    dateTime: '2023-12',
  },
  {
    name: 'Project Planning',
    description:
      'Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae.',
    date: 'Jan 2024',
    dateTime: '2024-01',
  },
  {
    name: 'Building Begins',
    description:
      'Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae.',
    date: 'Jan 2024',
    dateTime: '2024-01',
  },
  {
    name: 'In-house Showcase',
    description:
      'Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae.',
    date: 'Jan 2024',
    dateTime: '2024-01',
  },
];
