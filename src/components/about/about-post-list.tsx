'use client';

import React from 'react';
import { motion } from 'framer-motion';

const AboutPostList: React.FC = () => {
  return (
    <div className='bg-white py-24 sm:py-32'>
      {/* -- title */}
      <div className='border-b border-cyan-400 pb-5 mb-10'>
        <h3 className='text-base font-semibold leading-6 text-cyan-600'>
          Check De Updates
        </h3>
      </div>

      <div className='mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-12 px-6 sm:gap-y-16 lg:grid-cols-2 lg:px-8 mt-2'>
        {/* -- featurted */}
        <motion.article
          className='mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-lg'
          initial={{ x: -200, opacity: 0 }}
          transition={{
            ease: 'easeOut',
            duration: 0.1,
            type: 'spring',
            damping: 10,
            stiffness: 50,
          }}
          whileInView={{ x: 0, opacity: 1 }}
        >
          <time
            dateTime={featuredPost.datetime}
            className='block text-sm leading-6 text-gray-600'
          >
            {featuredPost.date}
          </time>
          <h2
            id='featured-post'
            className='mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'
          >
            {featuredPost.title}
          </h2>
          <p className='mt-4 text-lg leading-8 text-gray-600'>
            {featuredPost.description}
          </p>
          <div className='mt-4 flex flex-col justify-between gap-6 sm:mt-8 sm:flex-row-reverse sm:gap-8 lg:mt-4 lg:flex-col'>
            <div className='flex'>
              <a
                href={featuredPost.href}
                className='text-sm font-semibold leading-6 text-cyan-600'
                aria-describedby='featured-post'
              >
                Continue reading <span aria-hidden='true'>&rarr;</span>
              </a>
            </div>
            <div className='flex lg:border-t lg:border-gray-900/10 lg:pt-8'>
              <a
                href={featuredPost.author.href}
                className='flex gap-x-2.5 text-sm font-semibold leading-6 text-gray-900'
              >
                <img
                  src={featuredPost.author.imageUrl}
                  alt=''
                  className='h-6 w-6 flex-none rounded-full bg-gray-50'
                />
                {featuredPost.author.name}
              </a>
            </div>
          </div>
        </motion.article>

        {/* -- regular posts */}
        <div className='mx-auto w-full max-w-2xl border-t border-gray-900/10 pt-12 sm:pt-16 lg:mx-0 lg:max-w-none lg:border-t-0 lg:pt-0'>
          <div className='-my-12 divide-y divide-cyan-900/10'>
            {posts.map((post, idx) => (
              <motion.article
                key={post.id}
                className='py-12'
                initial={{ x: 200, opacity: 0 }}
                transition={{
                  ease: 'easeOut',
                  duration: 0.2,
                  delay: idx * 0.2,
                  type: 'spring',
                  damping: 10,
                  stiffness: 60,
                }}
                whileInView={{ x: 0, opacity: 1 }}
              >
                <div className='group relative max-w-xl'>
                  <time
                    dateTime={post.datetime}
                    className='block text-sm leading-6 text-gray-600'
                  >
                    {post.date}
                  </time>
                  <h2 className='mt-2 text-lg font-semibold text-gray-900 group-hover:text-cyan-600 transition-colors ease-out duration-150'>
                    <a href={post.href}>
                      <span className='absolute inset-0' />
                      {post.title}
                    </a>
                  </h2>
                  <p className='mt-4 text-sm leading-6 text-gray-600'>
                    {post.description}
                  </p>
                </div>
                <div className='mt-4 flex'>
                  <a
                    href={post.author.href}
                    className='relative flex gap-x-2.5 text-sm font-semibold leading-6 text-gray-900'
                  >
                    <img
                      src={post.author.imageUrl}
                      alt=''
                      className='h-6 w-6 flex-none rounded-full bg-gray-50'
                    />
                    {post.author.name}
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPostList;

const featuredPost = {
  id: 1,
  title: 'We’re incredibly proud to announce we have secured $75m in Series B',
  href: '#',
  description:
    'Libero neque aenean tincidunt nec consequat tempor. Viverra odio id velit adipiscing id. Nisi vestibulum orci eget bibendum dictum. Velit viverra posuere vulputate volutpat nunc. Nunc netus sit faucibus.',
  date: 'Mar 16, 2020',
  datetime: '2020-03-16',
  author: {
    name: 'Michael Foster',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
};
const posts = [
  {
    id: 2,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-16',
    author: {
      name: 'Lindsay Walton',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 2,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-16',
    author: {
      name: 'Lindsay Walton',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  // More posts...
];
