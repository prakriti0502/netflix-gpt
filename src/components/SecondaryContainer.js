import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
import lang from '../utils/languageConstants'

const SecondaryContainer = () => {
  const movies = useSelector(store=>store.movies)
  const langKey = useSelector(store=>store.config.lang) 
  return (
    movies.nowPlayingMovies && (
    <div className='bg-black'>
      <div className='-mt-52 pl-12 relative z-20'>
        <MovieList title={lang[langKey].nowPlaying} movies={movies.nowPlayingMovies}/>
        <MovieList title={lang[langKey].topRated} movies={movies.topRatedMovies}/>
        <MovieList title={lang[langKey].popular} movies={movies.popularMovies}/>
        <MovieList title={lang[langKey].upcoming} movies={movies.upcomingMovies}/>
      </div>
    </div>
    )
  )
}

export default SecondaryContainer