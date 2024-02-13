import { OnlineUsers } from '@chatwave/components';
import { TbEditCircle } from 'react-icons/tb';

export const Chats = () => {
  return (
    <section className="">
      <div className="message-list-panel w-[20%] h-screen bg-white border-r border-gray-300 p-5 fixed top-0">
        <div className="flex items-center justify-between">
          <h6 className="font-bold text-xl tracking-wide">Messages</h6>

          <a href="" className="inline-block p-2 rounded-lg shadow-shadowLight">
            <TbEditCircle className="text-xl" />
          </a>
        </div>

        <OnlineUsers />
      </div>
      <div className="fixed top-0 bg-red-500 h-screen ml-[20%] w-[80%]"></div>
    </section>
  );
};
