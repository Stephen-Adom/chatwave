import imageOne from 'assets/images/users/100_1.jpg';
import chatBoxImage from 'assets/images/others/chatbox-bg.jpg';
import {
  IoMenuOutline,
  IoCallOutline,
  IoVideocamOutline,
} from 'react-icons/io5';

export const ChatBox = () => {
  return (
    <div className="w-full relative">
      <div className="chatbox-header absolute top-0 left-0 w-full bg-white py-4 px-5 flex items-center justify-between border-b border-gray-300 z-[2]">
        <div className="chat-info flex items-center space-x-3">
          <div className="image-container w-12 h-12 rounded-full overflow-hidden cursor-pointer">
            <img src={imageOne} alt="first" className="w-full" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-sm">Holiday Trips</span>
            <span className="text-xs text-gray-400">450 messages</span>
          </div>
        </div>

        <div className="chat-info-options flex items-center space-x-1">
          <a href="" className="p-2">
            <IoVideocamOutline />
          </a>
          <a href="" className="p-2">
            <IoCallOutline />
          </a>
          <a href="" className="p-2">
            <IoMenuOutline />
          </a>
        </div>
      </div>
      <div
        className="w-full  h-screen bg-center bg-cover"
        style={{
          backgroundImage: `url(${chatBoxImage})`,
        }}
      ></div>
    </div>
  );
};
