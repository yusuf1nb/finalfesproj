import React from 'react'
import { Link } from 'react-router-dom'

function Explore() {
  return (
    <div class="container">
      <div class="row row__column">
        <h2 class="header__title">Explore more</h2>
        <Link to="/movies">
          <button class="btn">Browse More</button>
        </Link>
      </div>
    </div>
  );
}

export default Explore