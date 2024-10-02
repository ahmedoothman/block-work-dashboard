import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';

// styles
import './main.scss';

// router
import { RouterProvider } from 'react-router-dom';
import { router } from './router.jsx';
// redux
import store from './store/index.js';
import { Provider } from 'react-redux';

import { ThemeProvider } from '@mui/material/styles';
import theme from './mui/theme.js';

import LoadingPage from './pages/LoadingPage.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Suspense fallback={<LoadingPage />}>
        <RouterProvider router={router} />
      </Suspense>
    </ThemeProvider>
  </Provider>
);
