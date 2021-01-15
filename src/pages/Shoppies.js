import React from 'react';
import Nominations from '../components/Nominations';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';

const Shoppies = () => (
  <div className="min-h-screen min-w-full bg-s-offwhite font-poppins text-s-green p-4">
    <p className="text-7xl font-semibold text-center mt-20 mb-10">The Shoppies</p>
    <p className="text-xl font-normal text-s-grey text-center mb-20">Nominate your best movies.</p>

    <div className="flex justify-center w-full mb-20">
      <SearchBar />
    </div>

    <div className="flex">
      <SearchResults />
      <Nominations />
    </div>

  </div>
);

export default Shoppies;
