import React from 'react'
import { Link } from "react-router-dom";


function Nav() {
  return (
    <nav>
      <div className="nav__container">
        <h1 className='nav__title'>Streamz</h1>
        <ul class="nav__links">
          <li class="nav__link">
            <Link to="/" class="nav__link--anchor link__hover-effect">
              Home
            </Link>
          </li>
          <li class="nav__link">
            <Link
              to="/movies"
              class="nav__link--anchor link__hover-effect"
            >
              Movies
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav

