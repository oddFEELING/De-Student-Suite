import axios from 'axios';
import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

//=============================================>
// ======= GET ALL USERS -->
//=============================================>
export const useGetUserList = () => {
  const query = useQuery<CustomResponse<User[]>>({
    queryKey: ['get', 'all', 'user'],
    queryFn: async () => {
      try {
        const userList = await axios.get('/api/user', {});
        return userList.data;
      } catch (error) {
        console.log(error);
        return error;
      }
    },
  });

  return query;
};

//=============================================>
// ======= CREATE A USER -->
//=============================================>
export const useCreateUser = () => {
  const query = useQuery<CustomResponse<User>>({
    queryKey: ['create', 'user'],
    queryFn: async () => {
      try {
        const user = await axios.post('/api/user', {});
        return user.data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  return query;
};
