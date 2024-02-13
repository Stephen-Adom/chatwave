import {
  AllMessages,
  ChatBox,
  ChatDetails,
  OnlineUsers,
  SearchMessages,
} from '@chatwave/components';
import { TbEditCircle } from 'react-icons/tb';

export const Chats = () => {
  return (
    <section className="">
      <div className="message-list-panel w-[20%] h-screen bg-white p-5 fixed top-0 border-r border-gray-300 z-[2]">
        <div className="flex items-center justify-between">
          <h6 className="font-bold text-xl tracking-wide">Messages</h6>

          <a href="" className="inline-block p-2 rounded-lg shadow-shadowLight">
            <TbEditCircle className="text-xl" />
          </a>
        </div>

        <OnlineUsers />

        <SearchMessages />

        <AllMessages />
      </div>
      <div className="fixed top-0 bg-white h-screen ml-[20%] w-[75%] grid grid-cols-1 md:grid-cols-[75%_25%]">
        <ChatBox />
        <ChatDetails />
      </div>
    </section>
  );
};
