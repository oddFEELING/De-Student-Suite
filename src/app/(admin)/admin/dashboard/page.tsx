import DashboardStata from '@/components/admin/dashboard-stats';
import DashUserChart from '@/components/admin/dashboard-user-chart';
import React from 'react';

const AdminDashboard = () => {
  return (
    <div className='w-full h-max grid grid-cols-5 gap-8'>
      <DashboardStata />
      <DashUserChart />
    </div>
  );
};

export default AdminDashboard;
