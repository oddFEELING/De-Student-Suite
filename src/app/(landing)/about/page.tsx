import React from 'react';
import HeaderComponent from '@/components/lib/header/header';
import AboutCopy from '@/components/about/about-copy';
import AboutPostList from '@/components/about/about-post-list';

const AboutPage = () => {
  return (
    <main className='w-full flex min-h-screen flex-col items-center'>
      <HeaderComponent
        theme={{
          color: 'cyan',
          bg_img: 'bg-about-hero-bg',
          title_blend: false,
        }}
        text={{
          title_text: [{ text: "What's all" }, { main: true, text: 'This?' }],
          sub_title_text:
            'William Shakespeare: Pray, a humble soul with modest tales, nothing much to unfold.',
          main_text_color: 'text-cyan-100',
          main_text_after: 'after:bg-cyan-600',
        }}
        buttons={{
          btn_one_text: 'How to volunteer',
          btn_two_text: 'View rotas',
          btn_two_hover_bg: 'hover:bg-cyan-600',
        }}
      />

      {/* -- Abouit copy */}
      <AboutCopy />

      {/* image section */}
      <div className='mt-20 sm:mt-28 xl:mx-auto xl:max-w-7xl xl:px-8 dropshadow-lg'>
        <img
          src='https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80'
          alt=''
          className='aspect-[5/2] w-full object-cover xl:rounded-3xl'
        />
      </div>

      {/* -- post list */}
      <AboutPostList />
    </main>
  );
};

export default AboutPage;
