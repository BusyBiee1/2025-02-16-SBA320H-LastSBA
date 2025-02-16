import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './MovieList.css';

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('Avengers');
  const API_KEY = import.meta.env.VITE_API_KEY; 
  //const API_KEY = 'cd171968';
  console.log(API_KEY);
  
  useEffect(() => {
    fetch(`https://www.omdbapi.com/?s=${search}&apikey=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.Search) {
          setMovies(data.Search);
        }
      });
  }, [search]);

  return (
    

};

export default MovieList;