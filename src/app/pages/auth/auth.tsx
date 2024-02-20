import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

export const Auth = () => {
  return (
    <div id="auth-module">
      <Outlet />
      <Toaster position="top-right" />
    </div>
  );
};
