import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import Home from './components/Home'; // Import the Home component
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <h1>Welcome to the Movie Explorer</h1>
        <nav>
          < Link to="/" className="link">Home</Link> {/* Add class here */}
          <Link to="/movies" className="link">Explore Movies</Link> {/* Add class here */}
        </nav>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Define the route for the root path */}
          <Route path="/movies" element={<MovieList />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;