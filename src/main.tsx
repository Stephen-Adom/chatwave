/* eslint-disable @nx/enforce-module-boundaries */
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import 'primereact/resources/themes/lara-light-cyan/theme.css';
import './styles.css';
import { RouterProvider } from 'react-router-dom';
import { router } from '@chatwave/utils';

import { PrimeReactProvider } from 'primereact/api';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <PrimeReactProvider>
      <RouterProvider router={router} />
    </PrimeReactProvider>
  </StrictMode>
);
