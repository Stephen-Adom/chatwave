/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  IoChatbubbleEllipsesOutline,
  IoCallOutline,
  IoLogOutOutline,
  IoKeyOutline,
} from 'react-icons/io5';
import { HiOutlineCog6Tooth, HiOutlinePaintBrush } from 'react-icons/hi2';
import { PiUsersThree, PiUser, PiChatsCircle } from 'react-icons/pi';
import { VscBell } from 'react-icons/vsc';
import chatWaveLogo from 'assets/images/logo/chatwave-logo.png';
import imageOne from 'assets/images/users/100_1.jpg';
import styles from './navigation-sidebar.module.css';
import { NavLink } from 'react-router-dom';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';

const sidebarRoutes: { url: string; icon: JSX.Element }[] = [
  {
    url: '/chats',
    icon: <IoChatbubbleEllipsesOutline className="text-xl" />,
  },
  {
    url: '/group-chats',
    icon: <PiUsersThree className="text-xl" />,
  },
  {
    url: '/calls',
    icon: <IoCallOutline className="text-xl" />,
  },
  {
    url: '/settings',
    icon: <HiOutlineCog6Tooth className="text-xl" />,
  },
];

export const NavigationSidebar = () => {
  const defaultStyles =
    'mb-2 hover:bg-[#e3e9f2] rounded-lg p-2 flex items-center justify-center';

  const renderRoutes = () => {
    return sidebarRoutes.map((route, index) => {
      return (
        <NavLink
          to={route.url}
          key={index}
          className={({ isActive, isPending }) =>
            isActive ? `${defaultStyles} ${styles.active}` : defaultStyles
          }
        >
          {route.icon}
        </NavLink>
      );
    });
  };

  const confirmSignOut = () => {
    confirmDialog({
      message: 'Are you sure you want to sign out?',
      header: 'Sign Out?',
      icon: 'pi pi-info-circle',
      defaultFocus: 'reject',
      accept: () => acceptSignOut(),
    });
  };

  const acceptSignOut = () => {
    console.log('sign out');
  };

  return (
    <aside className="fixed top-0 left-0 w-[70px] bg-white h-screen flex flex-col items-center justify-center pt-8 pb-5 shadow-shadowLight z-[3]">
      <img
        src={chatWaveLogo}
        alt="chat wave logo"
        className="w-[60%] mx-auto mb-10"
      />

      <ul className="w-[70%] mx-auto">{renderRoutes()}</ul>

      <div
        data-dropdown-toggle="userMenuRight"
        data-dropdown-placement="right"
        className="w-12 h-12 rounded-lg mt-auto overflow-hidden shadow-shadowLight bg-lightGreyGradient cursor-pointer"
      >
        <img src={imageOne} alt="first" className="w-full" />
      </div>

      <div
        id="userMenuRight"
        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="userMenuRightButton"
        >
          <li>
            <a
              href="#"
              className="flex items-center gap-x-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <IoKeyOutline />
              Account
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-x-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <PiChatsCircle />
              Chats
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-x-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <VscBell />
              Notifications
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-x-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <HiOutlinePaintBrush />
              Personalization
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-x-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <PiUser />
              Profile
            </a>
          </li>
          <li>
            <a
              onClick={confirmSignOut}
              className="flex items-center gap-x-2 font-bold px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-red-700 cursor-pointer"
            >
              <IoLogOutOutline />
              Sign out
            </a>
          </li>
        </ul>
      </div>

      <ConfirmDialog />
    </aside>
  );
};
