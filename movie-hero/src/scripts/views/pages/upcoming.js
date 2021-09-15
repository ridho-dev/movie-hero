import TheMovieDbSource from '../../data/themoviedb-source';
import { createMovieItemTemplate } from '../templates/template-creator';
import { cardAnimation, titleAnimation } from '../../utils/animation/animation';
import UrlParser from '../../routes/url-parser';

const Upcoming = {
  async render() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    return `
        <section class="specific-content">
        <div class="specific-content__container">
            <h1>UPCOMING MOVIES</h1>
            <p class="specific-content__movie-page">Page ${url.id}</p>
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
    const viewPageContainerElement = document.querySelector('.view-more');
    const viewBackPageElement = document.querySelector('#viewBackButton');
    const viewNextPageElement = document.querySelector('#viewNextButton');
    const url = UrlParser.parseActiveUrlWithoutCombiner();

    let moviePage = parseInt(url.id, 10);
    // back button onclick
    if (moviePage === 1) {
      viewPageContainerElement.style.gridTemplateColumns = '1fr';
      viewBackPageElement.style.display = 'none';
    } else {
      viewNextPageElement.style.margin = '0';
    }
    viewBackPageElement.addEventListener('click', () => {
      moviePage -= 1;
      location.href = `#/upcoming/${moviePage}`;
    });

    // next button onclick
    viewNextPageElement.addEventListener('click', () => {
      moviePage += 1;
      location.href = `#/upcoming/${moviePage}`;
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
    const movies = await TheMovieDbSource.popularMovies(url.id);
    const moviesContainer = document.querySelector('#movieCardContainer');

    movies.forEach((movie) => {
      moviesContainer.innerHTML += createMovieItemTemplate(movie);
    });
  },
};

export default Upcoming;
