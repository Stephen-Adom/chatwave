import { IoChatbubbleEllipsesOutline, IoCallOutline } from 'react-icons/io5';
import { PiUsersThree } from 'react-icons/pi';
import chatWaveLogo from 'assets/images/logo/chatwave-logo.png';
import imageOne from 'assets/images/users/100_1.jpg';
import styles from './navigation-sidebar.module.css';
import { NavLink } from 'react-router-dom';

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

  return (
    <aside className="fixed top-0 left-0 w-[70px] bg-white h-screen flex flex-col items-center justify-center pt-8 pb-5 shadow-shadowLight z-[3]">
      <img
        src={chatWaveLogo}
        alt="chat wave logo"
        className="w-[60%] mx-auto mb-10"
      />

      <ul className="w-[70%] mx-auto">{renderRoutes()}</ul>

      <div className="w-12 h-12 rounded-lg mt-auto overflow-hidden shadow-shadowLight bg-lightGreyGradient">
        <img src={imageOne} alt="first" className="w-full" />
      </div>
    </aside>
  );
};
