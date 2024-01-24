'use client';

import { useGetUserList } from '@/hooks/user-query';
import { classnames } from '@/utils/classnames';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const AdminUserListCards = () => {
  const { data: userList, isLoading } = useGetUserList();
  const [Hover, setHover] = useState<number | null>(null);

  useEffect(() => {
    !isLoading && console.log(userList);
  }, [userList]);

  return (
    <div className='w-full flex flex-col items-centrer justify-center h-max'>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 w-full h-max items-center justify-center justify-items-center content-center'>
        {isLoading && !userList && <ListSkeleton />}
        {userList &&
          userList.data.map(
            (user) =>
              (user.personal.role === 'user' ||
                user.personal.role === 'creator') && (
                <div
                  key={user._id}
                  className=' px-7 md:px-4 h-max w-full border shadow-xl rounded-lg flex flex-col text-center md:text-start md:flex-row  xl:col-span-1 gap-3 items-center justify-start py-4 max-w-xl'
                >
                  <Image
                    src={user.personal.profile_image}
                    alt='user-profile-image'
                    width='40'
                    height='40'
                    className='rounded-full shadow-md w-12 md:w-1/6 max-w-14'
                  />
                  <div className='w-full md:w-3/6 flex flex-col gap-1'>
                    <p className='text-sm truncate'>
                      {user.personal.first_name} {user.personal.last_name}
                    </p>
                    <p className='text-xs text-gray-600 truncate'>
                      @
                      {user.personal.contact?.email &&
                        user.personal.contact?.email[0]}
                    </p>
                  </div>

                  <button className='w-max py-1 px-3 rounded-md border border-gray-300 m-2 justify-self-end text-sm'>
                    Options
                  </button>
                </div>
              )
          )}
      </div>
    </div>
  );
};

export default AdminUserListCards;

const ListSkeleton = () => (
  <>
    {[1, 2, 3, 4, 5, 6].map((item) => (
      <div
        key={item}
        className=' px-4 h-32 w-full max-w-lg max-w-6xl border shadow-xl rounded-lg flex  xl:col-span-1 gap-10 items-center justify-start bg-gray-100'
      >
        <div className='rounded animate-pulse shadow-md w-12 md:w-1/6 bg-gray-400 h-12 md:h-14 max-w-14' />
        <div className='w-3/6 flex flex-col gap-1'>
          <div className='text-sm truncate w-2/3 bg-gray-400 animate-pulse h-3 ronded-md' />
          <div className='text-xs w-full bg-gray-400 h-3 rounded-md animate-pulse' />
        </div>

        <div className='w-2/6 h-6 bg-gray-400 animate-pulse rounded-md ' />
      </div>
    ))}
  </>
);
