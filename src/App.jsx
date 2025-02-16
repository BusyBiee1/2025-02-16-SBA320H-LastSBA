import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import './App.css';

function App() {
    return (
      <Router>
        <div className="app">
          <h1>Welcome to the Movie Explorer</h1>
          
        </div>
      </Router>
    );
  };
  
  export default App;