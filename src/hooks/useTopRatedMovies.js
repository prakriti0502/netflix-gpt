import { useEffect } from "react";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  }

  useEffect(()=>{
    getTopRatedMovies();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

}

export default useTopRatedMovies;