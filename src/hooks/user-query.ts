import axios from 'axios';
import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

// cerate a user
export const useCreateUser = () => {
  const newUser = useQuery({
    queryKey: ['create', 'user'],
    queryFn: async () => {
      try {
        const user = await axios.post('api/user');
        console.log(user.data);
        return user.status;
      } catch (error) {
        console.log(error);
      }
    },
  });

  return newUser;
};
