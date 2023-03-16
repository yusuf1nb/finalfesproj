import React, { useState, useEffect } from "react";
import axios from "axios";

function MovieInfo() {
      const imdbID = localStorage.getItem("imdbID");

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchMovieDetails() {
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=40f21eea&i=${imdbID}`
      );
      const { data } = response;
      setMovie(data);
      console.log(data);
    }
    fetchMovieDetails();
  }, [imdbID]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="row movieInfo__row">
        <div className="movie__description">
          <h1 className="movieInfo__title cream">{movie.Title}</h1>
          <div className="movie__detail">
            <p className="movie__para movie__type">{movie.Type}</p>
            <p className="movie__para">{movie.Year}</p>
            <p className="movie__para">{movie.Rated}</p>
            <p className="movie__para">{movie.Runtime}</p>

            <p className="movie__para">{movie.imdbRating}</p>
          </div>
          <div className="movieInfo__details">
            <figure className="movie__img--wrapper">
              <img
                className="movie__img movieInfo__img"
                src={movie.Poster}
                alt=""
              />
            </figure>
          </div>

          <p className="movie__para movie__genres">
            {movie.Genre.split(", ").map((genre, index) => (
              <span key={index} className="movie__genre">
                {genre}
              </span>
            ))}
          </p>
          <p className="movie__para movie__plot separator">{movie.Plot}</p>
          <p className="movie__para separator">{movie.Writer}</p>
          <p className="movie__para separator">{movie.Actors}</p>
          <p className="movie__para">{movie.Released}</p>
          <p className="movie__para">{movie.Director}</p>
          <p className="movie__para">{movie.Actors}</p>
          <p className="movie__para movie__lang">{movie.Language}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieInfo;
