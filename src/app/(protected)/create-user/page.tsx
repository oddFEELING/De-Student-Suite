'use client';

import Lottie from 'lottie-react';
import LoadingLottie from '@assets/lotties/loading-hand-lottie.json';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { useCreateUser } from '@/hooks/user-query';

const CreateUser = () => {
  const router = useRouter();
  const { data, isSuccess, isError } = useCreateUser();
  useEffect(() => {
    if (data && isSuccess) {
      router.replace('/');
    }

    if (isError) router.replace('/signin');
  }, [data]);

  return (
    <main className='w-full h-screen flex items-center justify-center py-10 px-5 md:py-20 md:px-24'>
      <div className='flex flex-col items-center justify-center gap-5 border-2 border-dashed border-gray-400 w-full h-max py-24 max-w-7xl rounded-xl shadow-xl text-center px-4'>
        <Lottie animationData={LoadingLottie} className='w-64 h-64' />
        <p className='text-2xl text-gray-900 font-medium'>
          🥱 Syncing and some boring stuff...
        </p>
        <p className=' text-gray-600 animate-pulse -mt-5'>
          You don&apos;t need to do anything
        </p>
      </div>
    </main>
  );
};

export default CreateUser;
