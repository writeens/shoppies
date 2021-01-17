import React, { useState, useEffect } from 'react';
import fetchSearchData from '../api/helpers';
import InfoBanner from '../components/InfoBanner';
import Nominations from '../components/Nominations';
import Notify from '../components/Notify';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';

const Shoppies = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResultHeader, setSearchResultHeader] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [page, setPage] = useState(1);
  const [nominations, setNominations] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  /** CHECK NOMINATION */
  const isInNominationList = (id) => {
    const nominationIndex = nominations.findIndex((item) => item.imdbID === id);
    return nominationIndex >= 0;
  };

  /** UPDATE NOMINATIONS IN LOCAL STORAGE */
  const saveToLocalStorage = (data) => {
    const stringifyData = JSON.stringify(data);
    localStorage.setItem('shoppies-nominations', stringifyData);
  };

  /** INITIATE SEARCH WHEN USER CLICKS ENTER */
  const startSearch = async (e) => {
    e.preventDefault();
    const isFocused = document.activeElement === e.target;
    if (e.code === 'Enter' && isFocused) {
      setIsSearching(true);
      setSearchResultHeader('');
      const { data } = await fetchSearchData(searchTerm, page);
      if (data.length <= 0) {
        setSearchResults([]);
        setPage(page);
        setIsSearching(false);
        setSearchResultHeader(searchTerm);
        return;
      }
      setSearchResults(data.map((item) => ({
        ...item,
        isNominated: isInNominationList(item.imdbID),
      })));
      setPage(page);
      setIsSearching(false);
      setSearchResultHeader(searchTerm);
    }
  };

  /** HANDLE ADD NOMINATION TO NOMINATION LIST */
  const handleNominate = (id) => {
    // CHECK NUMBER OF MOVIES IN NOMINATION LIST
    if (nominations.length === 5) {
      setModalIsOpen(true);
      return;
    }

    // CHECK IF ITEM IS ALREADY NOMINATED
    const isInNomination = isInNominationList(id);
    if (isInNomination) {
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
    const updatedNominations = [...nominations, { ...nomination, isNominated: true }];
    setNominations(updatedNominations);

    Notify('Movie nominated successfully', 'success');

    saveToLocalStorage(updatedNominations);
  };

  /** HANDLE REMOVE NOMINATION */
  const handleRemoveNomination = (id) => {
    // REMOVE ITEM FROM NOMINATIONS LIST
    const newNominations = nominations.filter((item) => item.imdbID !== id);
    setNominations(newNominations);

    // CHECK IF ITEM IS IN SEARCH RESULTS AND UPDATE ACCORDINGLY
    const updatedSearchResults = searchResults.map((item) => {
      if (item.imdbID === id) {
        return {
          ...item,
          isNominated: false,
        };
      }
      return item;
    });

    setSearchResults(updatedSearchResults);

    saveToLocalStorage(newNominations);

    Notify('Movie removed successfully', 'success');
  };

  // SETUP NOMINATIONS ON MOUNT
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('shoppies-nominations'));
    if (data.length > 0) {
      setNominations(data);
    } else {
      setNominations([]);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col min-w-full bg-s-offwhite font-poppins text-s-green">
      <div className="p-4">
        <p className=" text-5xl md:text-7xl font-semibold text-center mt-20 mb-10">The Shoppies</p>
        <p className="text-xl font-normal text-s-grey text-center mb-20">Nominate your best movies.</p>

        <div className="flex justify-center w-full mb-20">
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={(e) => setSearchTerm(e.target.value)}
            startSearch={startSearch}
          />
        </div>

        <div className="flex flex-col sm:flex-row">
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
      <InfoBanner isOpen={modalIsOpen} closeModal={() => setModalIsOpen(false)} />
    </div>
  );
};

export default Shoppies;
