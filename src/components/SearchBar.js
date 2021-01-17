import React from 'react';
import { HiSearch } from 'react-icons/hi';
import PropTypes from 'prop-types';

const SearchBar = ({ searchTerm, setSearchTerm, startSearch }) => (
  <div className="border mx-2 sm:mx-0 px-8 border-s-green shadow-md flex items-center rounded w-full md:w-auto">
    <input
      id="search"
      value={searchTerm}
      onChange={setSearchTerm}
      onKeyUp={startSearch}
      className=" bg-transparent h-24 w-full md:w-108 xl:w-168 outline-none"
    />
    <button
      id="iconsearch"
      type="button"
      className="cursor-pointer"
      onClick={startSearch}
    >
      <HiSearch id="icon" color="#054A49" size="20" />
    </button>
  </div>
);

SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
  startSearch: PropTypes.func.isRequired,
};

export default SearchBar;
