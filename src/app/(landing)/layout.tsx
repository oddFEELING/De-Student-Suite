import LandingNav from '@/components/lib/nav/landing-nav';
import Link from 'next/link';
import React from 'react';

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='w-full min-h-screen flex flex-col items-center relative'>
      <LandingNav />
      {children}
    </div>
  );
};

export default LandingLayout;
