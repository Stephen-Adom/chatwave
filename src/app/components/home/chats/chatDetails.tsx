import imageOne from 'assets/images/users/100_1.jpg';
import { IoClose } from 'react-icons/io5';
import { PiUsersThree } from 'react-icons/pi';
import imageProfile from 'assets/images/users/100_4.jpg';

export const ChatDetails = () => {
  return (
    <div className="chatDetails bg-white h-full flex flex-col items-start border-l border-gray-300">
      <div className="bg-white w-full px-5 py-4 flex items-center">
        <IoClose />
        <h6 className="text-sm font-bold ml-4">Profile</h6>
      </div>
      <div
        className="image-profile-container w-full h-[11rem] bg-red-600 bg-center bg-cover relative after:content-[''] after:absolute after:w-full after:h-full after:bg-black/40 after:z-[1]"
        style={{
          backgroundImage: `url(${imageOne})`,
        }}
      >
        <div className="user-info absolute bottom-5 left-5 z-[2]">
          <h6 className="text-lg text-white tracking-wider font-bold">
            Jelena Donisova
          </h6>
          <span className="block text-white text-xs">Last seen recently</span>
        </div>
      </div>

      <section className="additional-info p-4">
        <div className="mb-3">
          <span className="text-sm font-extrabold text-gray-500 block">
            Bio
          </span>

          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus mollitia officia aspernatur suscipit commodi?
            Dignissimos
          </p>
        </div>

        <div className="mb-3">
          <span className="text-sm font-extrabold text-gray-500 block">
            Mobile
          </span>

          <p className="text-xs">+381 123 456 789</p>
        </div>
      </section>
      <section className="members-list w-full p-4">
        <div className="tab-header flex items-center justify-between bg-gray-100 py-2 px-1 cursor-pointer rounded-md">
          <span className="inline-block text-sm font-extrabold">
            Groups in Common
          </span>

          <PiUsersThree className="text-lg" />
        </div>

        <div className="group-list mt-2">
          <div className="group-item flex items-center gap-x-2">
            <img
              src={imageProfile}
              className="w-10 h-10 rounded-full"
              alt="imag"
            />
            <div>
              <span className="block font-extrabold text-xs leading-none">
                Girl on Fire
              </span>
              <span className="text-gray-400 text-xs leading-none">
                15 members
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
