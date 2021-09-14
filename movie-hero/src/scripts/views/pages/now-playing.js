import TheMovieDbSource from '../../data/themoviedb-source';
import { createMovieItemTemplate } from '../templates/template-creator';
import { cardAnimation, titleAnimation } from '../../utils/animation/animation';
import UrlParser from '../../routes/url-parser';

const NowPlaying = {
  async render() {
    return `
        <section class="specific-content">
        <div class="specific-content__container">
            <h1>NOW PLAYING MOVIES</h1>
            <!-- the class used here is the same with the home page -->
            <div class="home-content__movie-card" id="movieCardContainer">

            </div>
            <div class="view-more">
                <button id="viewBackButton"><i class="fas fa-chevron-left"></i></button>
                <button id="viewNextButton"><i class="fas fa-chevron-right"></i></button>
            </div>
        </div>
        </section>
    `;
  },

  async afterRender() {
    const viewBackPageElement = document.querySelector('#viewBackButton');
    const viewNextPageElement = document.querySelector('#viewNextButton');
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    let moviePage = parseInt(url.id, 10);
    // back button onclick
    if (moviePage === 1) {
      viewBackPageElement.style.display = 'none';
    }
    viewBackPageElement.addEventListener('click', () => {
      moviePage -= 1;
      location.href = `#/now-playing/${moviePage}`;
    });

    // next button onclick
    viewNextPageElement.addEventListener('click', () => {
      moviePage += 1;
      location.href = `#/now-playing/${moviePage}`;
    });

    await this._movieRender();
    cardAnimation();
    titleAnimation();
    this.uppercasingTitle();
  },

  async uppercasingTitle() {
    const movieTitles = document.querySelectorAll('.movie-title');
    movieTitles.forEach((movieTitle) => {
      const uppercaseMovieTitle = movieTitle.innerHTML.toUpperCase();
      // eslint-disable-next-line no-param-reassign
      movieTitle.innerHTML = uppercaseMovieTitle;
    });
  },

  async _movieRender() {
    window.scrollTo(-100, 0);
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const movies = await TheMovieDbSource.nowPlayingMovies(url.id);
    const moviesContainer = document.querySelector('#movieCardContainer');

    movies.forEach((movie) => {
      moviesContainer.innerHTML += createMovieItemTemplate(movie);
    });
  },
};

export default NowPlaying;
