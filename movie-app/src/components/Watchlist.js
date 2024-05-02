// Watchlist.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Watchlist = ({ user }) => {
  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    // Fetch movie data when component mounts
    axios.get('http://www.omdbapi.com/?apikey=YOUR_API_KEY&s=Avengers')
      .then(response => setMovies(response.data.Search))
      .catch(error => console.error(error));
  }, []);

  const addToWatchlist = (movie) => {
    setWatchlist([...watchlist, movie]);
  };

  const removeFromWatchlist = (movie) => {
    const updatedWatchlist = watchlist.filter(item => item.imdbID !== movie.imdbID);
    setWatchlist(updatedWatchlist);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Welcome, {user.email}!</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl mb-2">Your Watchlist</h3>
          <ul>
            {watchlist.map(movie => (
              <li key={movie.imdbID} className="flex items-center justify-between mb-2">
                {movie.Title} ({movie.Year}){' '}
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded"
                  onClick={() => removeFromWatchlist(movie)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl mb-2">Search Results</h3>
          <ul>
            {movies.map(movie => (
              <li key={movie.imdbID} className="flex items-center justify-between mb-2">
                {movie.Title} ({movie.Year}){' '}
                <button
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                  onClick={() => addToWatchlist(movie)}
                >
                  Add to Watchlist
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Watchlist;
