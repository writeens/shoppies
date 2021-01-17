import React from 'react';
import PropTypes from 'prop-types';
import SearchIcon from '../assets/search.svg';

const SearchBar = ({ searchTerm, setSearchTerm, startSearch }) => (
  <div className="border mx-2 sm:mx-0 px-8 border-s-green shadow-md flex items-center rounded w-full md:w-auto">
    <input
      id="search"
      value={searchTerm}
      onChange={setSearchTerm}
      onKeyUp={startSearch}
      className=" bg-transparent h-24 w-full md:w-108 xl:w-168 outline-none"
      required
    />
    <button
      id="iconsearch"
      type="button"
      className="cursor-pointer w-6 h-6 z-20 focus:outline-none"
      onClick={startSearch}
    >
      <img id="search" src={SearchIcon} alt="search_icon" className="w-full h-full focus:outline-none" />

    </button>
  </div>
);

SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
  startSearch: PropTypes.func.isRequired,
};

export default SearchBar;
