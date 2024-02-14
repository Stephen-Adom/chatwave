import { NavigationSidebar, SignOutDialog } from '@chatwave/components';
import { Outlet } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="home-wrapper w-full">
      <NavigationSidebar />
      <main className="w-full ml-[70px]">
        <Outlet />
      </main>

      <SignOutDialog />
    </div>
  );
};
