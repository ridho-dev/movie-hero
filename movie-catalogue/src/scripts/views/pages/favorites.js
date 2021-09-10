import { isEmptyObject } from 'jquery';
import FavoriteMovieIdb from '../../data/favoritemovie-idb';
import { createMovieItemTemplate } from '../templates/template-creator';
import { cardAnimation, titleAnimation } from '../../utils/animation/animation';

const Favorites = {
  async render() {
    return `
    <section class="specific-content">
        <div class="specific-content__container">
            <h1>YOUR FAVORITE MOVIES</h1>
            <!-- the class used here is the same with the home page -->
            <div class="empty-favorites" id="emptyFavorites">
                <p>Your favorite page still empty.</p>
                <p>Go back and like some movies!</p>
            </div>
            <div class="home-content__movie-card" id="movieCardContainer">

            </div>
        </div>
        <div class="favorites-back">
          <div class="detail-back-home">
              <a href="javascript:history.back();"><i class="fas fa-arrow-left"></i>Back</a>
          </div>
        </div>
    </section>
    `;
  },

  async afterRender() {
    const movies = await FavoriteMovieIdb.getAllMovie();
    const movieContainer = document.querySelector('#movieCardContainer');
    const emptyFavorites = document.querySelector('#emptyFavorites');
    if (isEmptyObject(movies)) {
      emptyFavorites.style.display = 'block';
    } else {
      emptyFavorites.style.display = 'none';
      movies.forEach((movie) => {
        movieContainer.innerHTML += createMovieItemTemplate(movie);
      });
    }
    cardAnimation();
    titleAnimation();
    this._uppercasingTitle();
  },

  _uppercasingTitle() {
    const movieTitles = document.querySelectorAll('.movie-title');
    movieTitles.forEach((movieTitle) => {
      const uppercaseMovieTitle = movieTitle.innerHTML.toUpperCase();
      // eslint-disable-next-line no-param-reassign
      movieTitle.innerHTML = uppercaseMovieTitle;
    });
  },
};

export default Favorites;
