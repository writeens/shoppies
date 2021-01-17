import React from 'react';
import PropTypes from 'prop-types';

// COMPONENTS
import MovieCard from './MovieCard';
import Loader from './Loader';

const SearchResults = ({
  searchResults,
  isSearching, header, handleNominate,
}) => {
  /** HANDLE WHAT RENDERS */
  const renderContent = () => {
    if (isSearching) {
      return <Loader small />;
    }
    if (searchResults <= 0 && !isSearching) {
      return <p className="text-s-green text-xl text-center">Your search results popup here</p>;
    }
    return (
      <div style={{ minHeight: '500px' }} className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-4 gap-x-2">
        {searchResults
          .map(({
            imdbID, Title, Year, Plot, Poster, isNominated,
          }) => (
            <MovieCard
              key={imdbID}
              id={imdbID}
              title={Title}
              year={Year}
              plot={Plot}
              poster={Poster}
              isInResult
              isNominated={isNominated}
              handleNominate={handleNominate}
            />
          ))}
      </div>
    );
  };
  return (
    <div className="flex flex-col p-2 flex-1 relative mb-8 sm:mb-0">
      {header && <p className="mb-8 font-bold text-xl md:text-3xl">{`Results for "${header}"`}</p>}
      {renderContent()}
    </div>
  );
};

SearchResults.defaultProps = {
  header: '',
};

SearchResults.propTypes = {
  searchResults: PropTypes.arrayOf(PropTypes.shape({

  })).isRequired,
  isSearching: PropTypes.bool.isRequired,
  header: PropTypes.string,
  handleNominate: PropTypes.func.isRequired,
};

export default SearchResults;
