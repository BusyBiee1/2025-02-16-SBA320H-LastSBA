import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './MovieList.css';

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('Avengers');
  //const API_KEY = '';
  const API_KEY = import.meta.env.VITE_API_KEY; 
  //console.log(API_KEY);
  
  useEffect(() => {
    //fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=``) 
    fetch(`https://www.omdbapi.com/?s=${search}&apikey=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.Search) {
          setMovies(data.Search);
        }
      });
  }, [search]);

  return (
    <div className="movie-list">
      <h2>Movie List</h2>
      <label htmlFor="movieSearch">Search movies:</label> 
      <input
        type="text"
        placeholder="Search for movies..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="movies">
        {movies.map((movie) => (
          <div key={movie.imdbID} className="movie-card">
            <img src={movie.Poster} alt={movie.Title} />
            <h3>{movie.Title}</h3>
            <Link to={`/movies/${movie.imdbID}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;