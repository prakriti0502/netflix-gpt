import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  // For the first load, nowPlayingMovies will be null, so movies will be empty array.
  // The line movies[0] will throw an error, cannot read properties of null.
  //   Keep this if check to get rid of that error.
  if (movies === null) return; // known as early return.
  const mainMovie = movies[0];

  const {original_title, overview, id} = mainMovie;
  return (
    <div>
      <VideoTitle title={original_title} overview={overview}/>
      <VideoBackground movieId={id}/>
    </div>
  );
};

export default MainContainer;
