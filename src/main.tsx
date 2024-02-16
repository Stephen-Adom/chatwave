/* eslint-disable @nx/enforce-module-boundaries */
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from '@chatwave/utils';

import 'primereact/resources/themes/lara-light-cyan/theme.css';
import 'react-international-phone/style.css';
import './styles.css';

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
