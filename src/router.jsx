// router
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const App = lazy(() => import('./App.jsx'));
// auth
const AuthBase = lazy(() => import('./pages/Auth/AuthBase.jsx'));
const Login = lazy(() => import('./pages/Auth/LoginPage.jsx'));
const Dashboard = lazy(() => import('./pages/Dashboard.jsx'));
const UserDetails = lazy(() => import('./pages/UserDetails.jsx'));


// error
const ErrorPage = lazy(() => import('./pages/ErrorPage.jsx'));
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
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'user-details',
        element: <UserDetails />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
