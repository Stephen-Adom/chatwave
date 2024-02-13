import { IoSearchOutline } from 'react-icons/io5';

export const SearchMessages = () => {
  return (
    <form action="" className="mt-7 relative">
      <IoSearchOutline className="absolute right-3 top-[50%] z-[1] -translate-y-[50%]" />
      <input
        type="text"
        placeholder="Search..."
        className="form-control py-2 rounded-lg"
        aria-label="search"
      />
    </form>
  );
};
