import React from 'react'
import { Link } from "react-router-dom";


function Nav() {
  return (
    <nav>
      <div className="nav__container">
        <h1 className='nav__title'>Streamz</h1>
        <ul class="nav__links">
          <li class="nav__link">
            <a href="./index.html" class="nav__link--anchor link__hover-effect">
              Home
            </a>
          </li>
          <li class="nav__link">
            <a
              href="./movies.html"
              class="nav__link--anchor link__hover-effect"
            >
              Movies
            </a>
          </li>
          <li class="nav__link">
            <a href="#" class="nav__link--anchor link__hover-effect">
              TV Shows
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav

