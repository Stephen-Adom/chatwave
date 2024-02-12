/* eslint-disable @nx/enforce-module-boundaries */
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import './styles.css';
import { RouterProvider } from 'react-router-dom';
import { router } from '@chatwave/utils';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
