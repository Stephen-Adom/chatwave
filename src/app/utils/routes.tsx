/* eslint-disable @nx/enforce-module-boundaries */
import App from '../app';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import { Auth, Login } from '@chatwave/pages/auth';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/auth/login" />,
  },
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'auth',
        element: <Auth />,
        children: [
          {
            path: 'login',
            element: <Login />,
          },
        ],
      },
    ],
  },
]);
