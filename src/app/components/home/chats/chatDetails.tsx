import imageOne from 'assets/images/users/100_1.jpg';
import { IoChevronDown } from 'react-icons/io5';

export const ChatDetails = () => {
  return (
    <div className="chatDetails bg-white h-full flex flex-col items-center justify-center py-4 px-8 border-l border-gray-300">
      <div className="image-container w-20 h-20 rounded-full overflow-hidden cursor-pointer">
        <img src={imageOne} alt="first" className="w-full" />
      </div>

      <h1 className="text-center text-xl font-extrabold mt-4">Holiday Trips</h1>
      <p className="text-xs text-gray-400 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
        incidunt quas
      </p>

      <div className="members-list w-full mt-2">
        <div className="tab-header flex items-center justify-between hover:bg-gray-100 py-2 px-1 cursor-pointer rounded-md">
          <span className="inline-block text-sm font-bold">Members</span>

          <IoChevronDown />
        </div>
      </div>
    </div>
  );
};
