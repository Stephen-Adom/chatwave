/* eslint-disable @nx/enforce-module-boundaries */
import App from '../app';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import { Auth, Login, Register } from '@chatwave/pages/auth';
import { Chats, Home } from '@chatwave/pages/home';

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
          {
            path: 'register',
            element: <Register />,
          },
        ],
      },
      {
        path: '',
        element: <Home />,
        children: [
          {
            path: 'chats',
            element: <Chats />,
          },
        ],
      },
    ],
  },
]);
