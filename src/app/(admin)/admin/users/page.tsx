import AdminUserListCards from '@/components/admin/users-list-cards';
import React from 'react';

const AdminUsersPage = () => {
  return (
    <div className='w-full h-max flex flex-col gap-3'>
      <h1>De Platform Users</h1>

      <AdminUserListCards />
    </div>
  );
};

export default AdminUsersPage;
