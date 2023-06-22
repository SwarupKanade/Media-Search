import { useEffect, useState } from "react";

import searchIcon from "./search.svg";
import MovieCard from "./components/MovieCard";
import TVCard from "./components/TVCard";
import "./App.css";

export default function App() {
  const API_KEY = "&api_key=feb6f0eeaa0a72662967d77079850353";
  const [movies, setMovies] = useState([]);
  const [tvs, setShows] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);
  const searchMovies = async (title) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${title}${API_KEY}`
    );
    //https://www.omdbapi.com?apikey=58324415&s=telugu
    const datamovie = await response.json();
    console.log(datamovie);
    setMovies(datamovie.results);
  };
  const searchShows = async (title) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/tv?query=${title}${API_KEY}`
    );
    //https://www.omdbapi.com?apikey=58324415&s=telugu
    const datatv = await response.json();
    console.log(datatv);
    setShows(datatv.results);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      searchMovies(searchTerm);
      searchShows(searchTerm);
    }
  };

  return (
    <div className="app">
      <h1>Media Search </h1>
      <div className="search">
        <input
          placeholder="Search for Movies and TV Shows"
          alt="movieSearch"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          onKeyDown={handleKeyPress}
        />
        <img
          src={searchIcon}
          alt="searchIcon"
          onClick={() => {
            searchMovies(searchTerm);
			searchShows(searchTerm);
          }}
        />
      </div>
      <h2 className="type">Movies</h2>
      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <div>
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      ) : (
        <div className="empty">
          <h3 style={{ color: "white" }}>No Movies !!</h3>
        </div>
      )}
      <h2 className="type">TV Shows</h2>
      {tvs.length > 0 ? (
        <div className="container">
          {tvs.map((tv) => (
            <div>
              <TVCard tv={tv} />
            </div>
          ))}
        </div>
      ) : (
        <div className="empty">
          <h3 style={{ color: "white" }}>No Tv Shows !!</h3>
        </div>
      )}
    </div>
  );
}
