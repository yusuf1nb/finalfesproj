import React, { useState, useEffect } from "react";
import axios from "axios";
import Movie from "../components/ui/Movie";

function Movies() {
    const [movies, setMovies] = useState()
    return (
        <div className="movies">
            {Movies.map((movie) => (
                <Movie movie={movie} />
            ))}
        </div>
    )
}

export default Movies;
