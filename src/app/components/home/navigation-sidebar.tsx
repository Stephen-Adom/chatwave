import { IoChatbubbleEllipsesOutline, IoCallOutline } from 'react-icons/io5';
import { PiUsersThree } from 'react-icons/pi';
import chatWaveLogo from 'assets/images/logo/chatwave-logo.png';

export const NavigationSidebar = () => {
  return (
    <aside className="fixed top-0 left-0 w-[70px] bg-white h-screen flex flex-col items-center justify-center pt-8 pb-5 border-r border-gray-300">
      <img
        src={chatWaveLogo}
        alt="chat wave logo"
        className="w-[60%] mx-auto mb-10"
      />

      <ul className="w-[70%] mx-auto">
        <li className="mb-2 hover:bg-[#e3e9f2] rounded-lg">
          <a href="" className="block p-2 flex items-center justify-center">
            <IoChatbubbleEllipsesOutline className="text-xl" />
          </a>
        </li>
        <li className="mb-2 hover:bg-[#e3e9f2] rounded-lg">
          <a href="" className="block p-2 flex items-center justify-center">
            <PiUsersThree className="text-xl" />
          </a>
        </li>
        <li className="mb-2 hover:bg-[#e3e9f2] rounded-lg">
          <a href="" className="block p-2 flex items-center justify-center">
            <IoCallOutline className="text-xl" />
          </a>
        </li>
      </ul>

      <div className="w-12 h-12 rounded-lg mt-auto shadow-shadowLight bg-lightGreyGradient"></div>
    </aside>
  );
};
