import imageOne from 'assets/images/users/100_1.jpg';
import imageTwo from 'assets/images/users/100_2.jpg';
import imageThree from 'assets/images/users/100_3.jpg';
import imageFour from 'assets/images/users/100_4.jpg';
import imageFive from 'assets/images/users/100_5.jpg';

export const OnlineUsers = () => {
  return (
    <div className="online-users mt-5">
      <div className="flex items-center justify-between">
        <span className="inline-block text-sm font-bold">Online</span>
        <a href="" className="text-primaryColor text-sm font-bold">
          See all
        </a>
      </div>

      <div className="user-bubbles flex items-center gap-x-3 mt-2">
        <div className="image-container w-10 h-10 rounded-xl overflow-hidden outline outline-2 outline-offset-1 outline-secondaryColor cursor-pointer">
          <img src={imageOne} alt="first" className="w-full" />
        </div>
        <div className="image-container w-10 h-10 overflow-hidden rounded-xl outline outline-2 outline-offset-1 outline-secondaryColor cursor-pointer">
          <img src={imageTwo} alt="first" className="w-full" />
        </div>
        <div className="image-container w-10 h-10 overflow-hidden rounded-xl outline outline-2 outline-offset-1 outline-secondaryColor cursor-pointer">
          <img src={imageThree} alt="first" className="w-full" />
        </div>
        <div className="image-container w-10 h-10 overflow-hidden rounded-xl outline outline-2 outline-offset-1 outline-secondaryColor cursor-pointer">
          <img src={imageFour} alt="first" className="w-full" />
        </div>
        <div className="image-container w-10 h-10 overflow-hidden rounded-xl outline outline-2 outline-offset-1 outline-secondaryColor cursor-pointer">
          <img src={imageFive} alt="first" className="w-full" />
        </div>
      </div>
    </div>
  );
};
