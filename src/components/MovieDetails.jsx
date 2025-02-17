import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './MovieDetails.css';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  //const API_KEY = 'daf7df50-f572-4b52-b399-3d4edcf49b5b';
  const API_KEY = import.meta.env.VITE_API_KEY; 
  //const API_KEY="cd171968";

  useEffect(() => {
    //fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=cd171968`)    
    fetch(`https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => setMovie(data));
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-details">
      <h2>{movie.Title}</h2>
      <img src={movie.Poster} alt={movie.Title} />
      <p><strong>Year:</strong> {movie.Year}</p>
      <p><strong>Genre:</strong> {movie.Genre}</p>
      <p><strong>Plot:</strong> {movie.Plot}</p>
      <p><strong>Director:</strong> {movie.Director}</p>
      <p><strong>Actors:</strong> {movie.Actors}</p>
    </div>
  );
};

export default MovieDetails;