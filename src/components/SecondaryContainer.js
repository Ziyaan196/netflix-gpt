import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  if (!movies.nowPlayingMovies) return null;
  if (!movies.popularMovies) return null;
  if (!movies.topRatedMovies) return null;
  if (!movies.upComingMovies) return null;

  return (
    <div className=" bg-black">
      <div className="-mt-64 px-12 relative z-20">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
        <MovieList title={"Up Coming"} movies={movies.upComingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
