// src/router.js

import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';

const App = lazy(() => import('./App.jsx'));
const Login = lazy(() => import('./pages/Auth/LoginPage.jsx'));
const Users = lazy(() => import('./pages/Users.jsx'));
const UserDetails = lazy(() => import('./pages/UserDetails.jsx'));
const Contracts = lazy(() => import('./pages/Contracts.jsx'));
const ContractDetails=lazy(() => import('./pages/ContractDetails.jsx'))
const ErrorPage = lazy(() => import('./pages/ErrorPage.jsx'));

const DashboardLayout = lazy(() => import('./components/routing/DashboardLayout.jsx'));

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        element: <DashboardLayout />,
        children: [
          {
            path: 'users',
            element: <Users />,
          },
          {
            path: 'user-details/:userId',  
            element: <UserDetails />,
          },
          {
            path: 'contracts',
            element: <Contracts />,
          },
          {
            path: 'contract-details/:contractId',  
            element: <ContractDetails />,
          },
        ],
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
