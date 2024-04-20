import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
    const json = await data.json();
    console.log("data is");
    dispatch(addNowPlayingMovies(json.results));
    console.log(json);
  }

  useEffect(()=>{
    getNowPlayingMovies();
  },[]);

}

export default useNowPlayingMovies;