import React from 'react';

const MovieCard = () => {
  console.log('object');
  return (
    <div className="flex flex-col rounded bg-white shadow-lg text-black text-xs p-3">
      <img
        src="https://images.unsplash.com/photo-1603658697717-3729034c37d5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        alt="movie_image"
        className="w-full h-28 rounded mb-4 object-cover"
      />
      <p className="mb-1 font-bold">Jurassic World</p>
      <p className="mb-1 font-light">2018</p>
      <p className="mb-4 font-light text-justify">A movie about love, the world and everything good that comes out of it</p>
      <button
        type="button"
        className="w-full font-light py-2 text-center text-white bg-s-brightgreen rounded hover:bg-green-800"
      >
        Nominate

      </button>
    </div>
  );
};

export default MovieCard;
