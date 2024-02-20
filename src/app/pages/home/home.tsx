import { NavigationSidebar } from '@chatwave/components';
import { setAuthUser } from '@chatwave/store';
import { notifyError } from '@chatwave/utils';
import localforage from 'localforage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';

export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    localforage
      .getItem('authUser')
      .then((userInfo: any) => {
        dispatch(setAuthUser(userInfo));
      })
      .catch((err) => {
        notifyError('Auth user not found');
      });
  }, []);

  return (
    <div className="home-wrapper w-full">
      <NavigationSidebar />
      <main className="w-full ml-[70px]">
        <Outlet />
      </main>
    </div>
  );
};
