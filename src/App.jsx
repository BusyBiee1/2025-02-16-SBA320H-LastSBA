import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MovieList from './components/MovieList/MovieList';
import MovieDetails from './components/MovieDetails/MovieDetails';
import Home from './components/Home'; 
import bannerImage from './assets/images/BannerPopcorn.jpg'; 
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <img src={bannerImage} alt="Movie Banner" className="banner" /> 
        <h1>Welcome to the Movie Explorer</h1>
        <nav>
          < Link to="/" className="link">Home</Link> 
          <Link to="/movies" className="link">Explore Movies</Link> 
        </nav>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/movies" element={<MovieList />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;