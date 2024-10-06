

import React from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from './NavBar'; 

const DashboardLayout = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div>
      {user && <Navbar />} 
      <Outlet /> 
    </div>
  );
};

export default DashboardLayout;
