import React, { useEffect, useState } from 'react'
import axios from "axios";

function Movie() {
    const [movie, setMovie] = useState([])

    async function fetchMovies() {
        const movieData = await axios.get(
          `https://www.omdbapi.com/?apikey=40f21eea&s=fast`
        );
        setMovie(movieData)

    }

    useEffect(() => {
        fetchMovies()
    }, [])
  return (
    <div class="movie">
      <figure class="movie__img--wrapper">
        <img
          class="movie__img"
          src={movie.Poster}
          alt=""
        />
      </figure>
      <div class="movie__title">{movie.Title} {movie.Year}</div>
      <div class="movie__rating">{movie.rating}</div>
    </div>
  );
}

export default Movie