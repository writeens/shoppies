import React from 'react';
import { HiSearch } from 'react-icons/hi';

const SearchBar = () => {
  console.log('object');
  return (
    <div className="border px-8 border-s-green shadow-md flex items-center rounded">
      <input className=" bg-transparent h-24 w-168 outline-none" />
      <div className="pl-4">
        <HiSearch color="#054A49" size="20" />
      </div>
    </div>
  );
};

export default SearchBar;
