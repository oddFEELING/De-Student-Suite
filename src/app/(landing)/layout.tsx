import Footer from '@/components/lib/footer/footer';
import LandingNav from '@/components/lib/nav/landing-nav';

import React from 'react';

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='w-full min-h-screen flex flex-col items-center relative'>
      <LandingNav />
      {children}
      <Footer />
    </div>
  );
};

export default LandingLayout;
