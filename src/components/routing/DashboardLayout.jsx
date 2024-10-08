import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from './NavBar';
import Cookie from 'js-cookie';
const DashboardLayout = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
