import imageOne from 'assets/images/users/100_1.jpg';

export const ChatDetails = () => {
  return (
    <div className="chatDetails bg-white h-full flex flex-col items-center justify-center p-4">
      <div className="image-container w-20 h-20 rounded-full overflow-hidden cursor-pointer">
        <img src={imageOne} alt="first" className="w-full" />
      </div>

      <h1 className="text-center text-xl font-extrabold mt-4">Holiday Trips</h1>
      <p className="text-xs text-gray-400 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
        incidunt quas
      </p>

      <div className="members-list"></div>
    </div>
  );
};
