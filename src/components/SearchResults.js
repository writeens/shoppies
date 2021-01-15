import React from 'react';
import MovieCard from './MovieCard';

const SearchResults = () => {
  console.log('object');
  return (
    <div className="flex flex-col p-6">
      <p className="mb-8 font-bold text-3xl">Results for &quot;ram&quot;</p>
      <div style={{ minHeight: '300px' }} className="grid grid-cols-3 gap-y-8 gap-x-4">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  );
};

export default SearchResults;
