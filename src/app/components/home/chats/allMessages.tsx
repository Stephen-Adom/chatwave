import imageOne from 'assets/images/users/100_1.jpg';
import { IoCheckmarkDone } from 'react-icons/io5';

export const AllMessages = () => {
  return (
    <section id="all-messages" className="mt-5">
      <span className="inline-block italic text-xs text-gray-500">
        All Messages
      </span>

      <div className="message-list mt-3">
        <div className="message flex items-center gap-x-3 py-2">
          <div className="w-10 h-10 rounded-2xl overflow-hidden">
            <img src={imageOne} alt="first" className="w-full" />
          </div>
          <div className="flex flex-col">
            <span className="inline-block font-extrabold text-xs">
              Aditya Anugrah
            </span>
            <span className="inline-block text-xs text-gray-400">
              I truly love you!
            </span>
          </div>

          <div className="message-status ml-auto w-[60px] flex flex-col items-end">
            <span className="inline-block text-[0.65rem] text-gray-400 font-bold">
              10:00 PM
            </span>
            <IoCheckmarkDone className="text-green-700" />
          </div>
        </div>

        <div className="message flex items-center gap-x-3 py-2">
          <div className="w-10 h-10 rounded-2xl overflow-hidden">
            <img src={imageOne} alt="first" className="w-full" />
          </div>
          <div className="flex flex-col">
            <span className="inline-block font-extrabold text-xs">
              Aditya Anugrah
            </span>
            <span className="inline-block text-xs text-gray-400">
              I truly love you!
            </span>
          </div>

          <div className="message-status ml-auto w-[60px] flex flex-col items-end">
            <span className="inline-block text-[0.65rem] text-gray-400 font-bold">
              10:00 PM
            </span>
            <IoCheckmarkDone className="text-green-700" />
          </div>
        </div>

        <div className="message flex items-center gap-x-3 py-2">
          <div className="w-10 h-10 rounded-2xl overflow-hidden">
            <img src={imageOne} alt="first" className="w-full" />
          </div>
          <div className="flex flex-col">
            <span className="inline-block font-extrabold text-xs">
              Aditya Anugrah
            </span>
            <span className="inline-block text-xs text-gray-400">
              I truly love you!
            </span>
          </div>

          <div className="message-status ml-auto w-[60px] flex flex-col items-end">
            <span className="inline-block text-[0.65rem] text-gray-400 font-bold">
              10:00 PM
            </span>
            <IoCheckmarkDone className="text-green-700" />
          </div>
        </div>

        <div className="message flex items-center gap-x-3 py-2">
          <div className="w-10 h-10 rounded-2xl overflow-hidden">
            <img src={imageOne} alt="first" className="w-full" />
          </div>
          <div className="flex flex-col">
            <span className="inline-block font-extrabold text-xs">
              Aditya Anugrah
            </span>
            <span className="inline-block text-xs text-gray-400">
              I truly love you!
            </span>
          </div>

          <div className="message-status ml-auto w-[60px] flex flex-col items-end">
            <span className="inline-block text-[0.65rem] text-gray-400 font-bold">
              10:00 PM
            </span>
            <IoCheckmarkDone className="text-green-700" />
          </div>
        </div>
      </div>
    </section>
  );
};
