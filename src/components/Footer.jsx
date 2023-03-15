import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div class="container">
        <div class="row row__column">
          <Link to="/">
            <h1 className="nav__title">Streamz</h1>
          </Link>
          <div class="footer__list">
            <Link to="/" class="footer__link">
              Home
            </Link>
            <Link to="/movies" class="footer__link">
              Movies
            </Link>
          </div>
          <div class="footer__copyright">Copyright &copy; 2023 Streamz</div>
        </div>
      </div>
    </footer>
  );
}


export default Footer;
