import React from 'react';
import { UserProfile } from '@clerk/nextjs';

const LocalUserProfile = () => {
  return (
    <div className='w-full h-max flex items-center justify-center py-16'>
      <UserProfile path='/user-profile' routing='path' />
    </div>
  );
};

export default LocalUserProfile;
