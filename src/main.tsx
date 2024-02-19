/* eslint-disable @nx/enforce-module-boundaries */
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from '@chatwave/utils';

import 'primereact/resources/themes/lara-light-cyan/theme.css';
import 'react-international-phone/style.css';
import './styles.css';

import { PrimeReactProvider } from 'primereact/api';
import { Provider } from 'react-redux';
import { store } from '@chatwave/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <Provider store={store}>
      <PrimeReactProvider>
        <RouterProvider router={router} />
      </PrimeReactProvider>
    </Provider>
  </StrictMode>
);
