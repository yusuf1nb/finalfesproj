import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import MovieInfo from "./MovieInfo";


function Movies() {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  const [searchId, setSearchId] = useState(id);
  const [type, setType] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("asc");
    const [selectedMovie, setSelectedMovie] = useState(null);

  function onSearch() {
    fetchMovies(searchId, type, 1);
  }

  function onPrevPage() {
    setCurrentPage(currentPage - 1);
  }

  function onNextPage() {
    setCurrentPage(currentPage + 1);
  }

  function onToggleSortOrder() {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  }
  function handleImageClick(imdbID) {
    localStorage.setItem("imdbID", imdbID);
    window.location.href = `/movies/${imdbID}`;
  }

  async function fetchMovies(movieId, type, page = 1) {
    const response = await axios.get(
      `https://www.omdbapi.com/?apikey=40f21eea&s=${
        movieId || id || "fast"
      }&type=${type}&page=${page}`
    );
    const { data } = response;
    const filteredMovies = data.Search.filter(
      (movie) => movie.Type === "movie" || movie.Type === "series"
    );
    const sortedMovies =
      sortOrder === "asc"
        ? filteredMovies.sort((a, b) => a.Year - b.Year)
        : filteredMovies.sort((a, b) => b.Year - a.Year);
    setMovies(sortedMovies);
  }

  useEffect(() => {
    fetchMovies(searchId, type, currentPage);
  }, [searchId, type, currentPage, sortOrder]);

 


  return (
    <div className="container">
      <div className="row movie__row">
        <div className="movie__header">
          <input
            type="text"
            placeholder="Search Title"
            className="movie__search"
            onChange={(event) => setSearchId(event.target.value)}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                onSearch();
              }
            }}
          />
          <select
            className="movies__filter"
            value={type}
            onChange={(event) => setType(event.target.value)}
          >
            <option value="">All</option>
            <option value="movie">Movie</option>
            <option value="series">Series</option>
          </select>
          <button className="movies__filter" onClick={onToggleSortOrder}>
            {sortOrder === "asc" ? "Year Asc" : "Year Desc"}
          </button>
        </div>
        <div className="search__result">
          <p className="movie__result">Showing results for "{searchId}"</p>
        </div>
        <div className="movies">
          {movies.map((movie) => (
            <div className="movie" key={movie.imdbID}>
              <Link to={`/movies/${movie.imdbID}`} onClick={() => handleImageClick(movie.imdbID)}>

                <figure className="movie__img--wrapper">
                  <img className="movie__img" src={movie.Poster} alt="" />
                </figure>

              <div className="movie__title">
                {movie.Title} ({movie.Year})
              </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="movie__page">
          <button
            className="page__button"
            disabled={currentPage === 1}
            onClick={onPrevPage}
          >
            Previous Page
          </button>
          <button className="page__button" onClick={onNextPage}>
            Next Page
          </button>
        </div>
      </div>
    </div>
  );
}

export default Movies;
