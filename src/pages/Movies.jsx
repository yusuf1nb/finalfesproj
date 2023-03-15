import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Movies() {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  const [searchId, setSearchId] = useState(id);
  const [type, setType] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

 function onSearch() {
   fetchMovies(searchId, type, 1);
 }

 function onPrevPage() {
   setCurrentPage(currentPage - 1);
 }

 function onNextPage() {
   setCurrentPage(currentPage + 1);
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
    setMovies(filteredMovies);
    console.log(filteredMovies);
  }


useEffect(() => {
  fetchMovies(searchId, type, currentPage);
}, [searchId, type, currentPage]);

  return (
    <div className="container">
      <div className="row movie__row">
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
        <div className="movies">
          {movies.map((movie) => (
            <div className="movie" key={movie.imdbID}>
              <figure className="movie__img--wrapper">
                <img className="movie__img" src={movie.Poster} alt="" />
              </figure>
              <div className="movie__title">
                {movie.Title} ({movie.Year})
              </div>
            </div>
          ))}
        </div>
        <div className="pagination">
          <button
            className="pagination__button"
            disabled={currentPage === 1}
            onClick={onPrevPage}
          >
            Previous Page
          </button>
          <button className="pagination__button" onClick={onNextPage}>
            Next Page
          </button>
        </div>
      </div>
    </div>
  );
}

export default Movies;
