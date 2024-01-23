import Link from 'next/link';
import React from 'react';
import AppLogo from '@/components/lib/logo/logo';

const NotFoundPage: React.FC = () => {
  return (
    <div className='grid min-h-full grid-cols-1 grid-rows-[1fr,auto,1fr] bg-white lg:grid-cols-[max(50%,36rem),1fr]'>
      <header className='mx-auto w-full max-w-7xl px-6 pt-6 sm:pt-10 lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:px-8'>
        <AppLogo dark={true} sx='lg:-ml-5 xl:-ml-10' />
      </header>
      <main className='mx-auto w-full max-w-7xl px-6 py-24 sm:py-32 lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:px-8'>
        <div className='max-w-lg'>
          <p className='text-base font-semibold leading-8 text-violet-600'>
            404
          </p>
          <h1 className='mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
            Page not found
          </h1>
          <p className='mt-6 text-base leading-7 text-gray-600'>
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </p>
          <div className='mt-10'>
            <Link
              href='/'
              className='text-sm font-semibold leading-7 text-violet-600'
            >
              <span aria-hidden='true'>&larr;</span> Back to home
            </Link>
          </div>
        </div>
      </main>
      <footer className='self-end lg:col-span-2 lg:col-start-1 lg:row-start-3'>
        <div className='border-t border-gray-100 bg-gray-50 py-10'>
          <nav className='mx-auto flex w-full max-w-7xl items-center gap-x-4 px-6 text-sm leading-7 text-gray-600 lg:px-8'>
            <a href='/contact'>Contact support</a>
            <svg
              viewBox='0 0 2 2'
              aria-hidden='true'
              className='h-0.5 w-0.5 fill-gray-300'
            >
              <circle cx={1} cy={1} r={1} />
            </svg>
            <a href='#'>Status</a>
            <svg
              viewBox='0 0 2 2'
              aria-hidden='true'
              className='h-0.5 w-0.5 fill-gray-300'
            >
              <circle cx={1} cy={1} r={1} />
            </svg>
            <a href='#'>Twitter</a>
          </nav>
        </div>
      </footer>
      <div className='hidden lg:relative lg:col-start-2 lg:row-start-1 lg:row-end-4 lg:block'>
        <img
          src='https://images.unsplash.com/photo-1559190394-df5a28aab5c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aGFwcHklMjBkb2d8ZW58MHwxfDB8fHww'
          alt=''
          className='absolute inset-0 h-full w-full object-cover'
        />
      </div>
    </div>
  );
};

export default NotFoundPage;
