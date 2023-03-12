import React from 'react'

function Footer() {
  return (
     <footer>
            <div class="container">
              <div class="row row__column">
                <a href="#">
                  <figure class="footer__logo">
                    <img src="" class="footer__logo--img" alt=""/>
                  </figure>
                </a>
                <div class="footer__list">
                  <a href="#" class="footer__link">Home</a>
                  <a class="footer__link no-cursor">Moives</a>
                  <a href="#features" class="footer__link">TV Shows</a>
                </div>
                <div class="footer__copyright">Copyright &copy; 2023 Streamz</div>
              </div>
            </div>
          </footer>
  )
}

export default Footer