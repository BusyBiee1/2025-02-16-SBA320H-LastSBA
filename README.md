# SBA 320H - React Web Application Project

# Movie Explorer

- Movie Explorer is a React-based web application that allows users to search for 
movies and view detailed information about them. 
- The application uses the OMDB API to fetch movie data and demonstrates the use 
of React features like `useState`, `useEffect`, `react-router-dom`, `link` and more.

---

## Features

- **Search Movies**: Users can search for movies by title.
- **View Movie Details**: Users can click on a movie to view detailed information, 
including the plot, genre, director, and actors.
- **Responsive Design**: The application is mobile-friendly and centered in the browser.

---

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **React Router**: For navigation between pages.
- **OMDB API**: To fetch movie data.
- **CSS**: For styling the application.
- **AJAX (Fetch API)**: To make requests to the OMDB API.

---

## Project Structure

movie-explorer - LastSBA/
├── public/
│ ├── index.html
├── src/
│ ├── assets/
│ │ ├── images/
│ │ │ ├── BannerPopcorn.jsx
│ │ │ ├── BannerPopcornReel.jsx
│ ├── components/
│ │ ├── MovieList/
│ │ │ ├── MovieList.jsx
│ │ │ ├── MovieList.css
│ │ ├── MovieDetails/
│ │ │ ├── MovieDetails.jsx
│ │ │ ├── MovieDetails.css
│ │ ├── Home.jsx
│ ├── App.css
│ ├── index.css
│ ├── main.jsx
├── .gitignore
├── package.json
├── README.md

- **`main.jsx`**: The entry point of the application.
- **`App.jsx`**: The main component that sets up routing and navigation.
- **`MovieList.jsx`**: A component that displays a list of movies based on the user's search.
- **`MovieDetails.jsx`**: A component that displays detailed information about a selected movie.
- **CSS Files**: Styling for the application and individual components.
