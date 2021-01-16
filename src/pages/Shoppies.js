/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import fetchSearchData from '../api/helpers';
import Nominations from '../components/Nominations';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';

const Shoppies = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResultHeader, setSearchResultHeader] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [page, setPage] = useState(1);
  const [searchCount, setSearchCount] = useState(0);
  const [nominations, setNominations] = useState([]);

  /** CHECK NOMINATION */
  const isInNominationList = (id) => {
    const nominationIndex = nominations.findIndex((item) => item.imdbID === id);
    return nominationIndex >= 0;
  };

  /** INITIATE SEARCH WHEN USER CLICKS ENTER */
  const startSearch = async (e) => {
    e.preventDefault();
    const isFocused = document.activeElement === e.target;
    if (e.code === 'Enter' && isFocused) {
      setIsSearching(true);
      setSearchResultHeader('');
      const { data, count } = await fetchSearchData(searchTerm, page);
      if (data.length <= 0) {
        setSearchResults([]);
        setPage(page);
        setSearchCount(count);
        setIsSearching(false);
        setSearchResultHeader(searchTerm);
        return;
      }
      setSearchResults(data.map((item) => ({
        ...item,
        isNominated: isInNominationList(item.imdbID),
      })));
      setPage(page);
      setSearchCount(count);
      setIsSearching(false);
      setSearchResultHeader(searchTerm);
    }
  };

  /** HANDLE ADD NOMINATION TO NOMINATION LIST */
  const handleNominate = (id) => {
    // CHECK IF ITEM IS ALREADY NOMINATED
    const isInNomination = isInNominationList(id);
    if (isInNomination) {
      // THROW ERROR
      return;
    }
    const nomination = searchResults.find((item) => item.imdbID === id);
    setSearchResults(searchResults.map((item) => {
      if (item.imdbID === id) {
        return {
          ...item,
          isNominated: true,
        };
      }
      return item;
    }));
    setNominations([...nominations, { ...nomination, isNominated: true }]);
  };

  /** HANDLE REMOVE NOMINATION */
  const handleRemoveNomination = (id) => {

  };

  // LISTEN FOR CHANGES IN SEARCH TERM
  useEffect(() => {
  }, [searchTerm]);

  return (
    <div className="min-h-screen min-w-full bg-s-offwhite font-poppins text-s-green p-4">
      <p className="text-7xl font-semibold text-center mt-20 mb-10">The Shoppies</p>
      <p className="text-xl font-normal text-s-grey text-center mb-20">Nominate your best movies.</p>

      <div className="flex justify-center w-full mb-20">
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={(e) => setSearchTerm(e.target.value)}
          startSearch={startSearch}
        />
      </div>

      <div className="flex">
        <SearchResults
          searchResults={searchResults}
          isSearching={isSearching}
          header={searchResultHeader}
          handleNominate={handleNominate}
          nominations={nominations}
        />
        <Nominations nominations={nominations} handleRemoveNomination={handleRemoveNomination} />
      </div>

    </div>
  );
};

export default Shoppies;
