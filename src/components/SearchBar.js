import React from 'react';
import { HiSearch } from 'react-icons/hi';
import PropTypes from 'prop-types';

const SearchBar = ({ searchTerm, setSearchTerm, startSearch }) => {
  console.log('object');
  return (
    <div className="border px-8 border-s-green shadow-md flex items-center rounded">
      <input
        id="search"
        value={searchTerm}
        onChange={setSearchTerm}
        onKeyUp={startSearch}
        className=" bg-transparent h-24 w-168 outline-none"
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
};

SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
  startSearch: PropTypes.func.isRequired,
};

export default SearchBar;
