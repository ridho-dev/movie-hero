import TheMovieDbSource from '../../data/themoviedb-source';
import UrlParser from '../../routes/url-parser';
import { createMovieDetailTemplate, createLikeButtonTemplate } from '../templates/template-creator';
import { detailResponsive } from '../../utils/page-responsive/detail-responsive';
import { detailAnimation } from '../../utils/animation/animation';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
    <div class="detail">
        <div class="detail-container" id="detailContainer">

        </div>
        <div class="detail-back-home">
            <a href="javascript:history.back();"><i class="fas fa-arrow-left"></i>Back</a>
        </div>
    </div>

    `;
  },

  async afterRender() {
    window.scrollTo(0, 0);
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const movie = await TheMovieDbSource.detailMovie(url.id);
    const movieCrew = await TheMovieDbSource.detailMovieCrew(url.id);
    const movieContainer = document.querySelector('#detailContainer');
    movieContainer.innerHTML = createMovieDetailTemplate(movie, movieCrew);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButton'),
      movie: {
        id: movie.id,
        title: movie.title,
        release_date: movie.release_date,
        vote_average: movie.vote_average,
        poster_path: movie.poster_path,
      },
    });

    this._uppercasingTitle();
    detailResponsive();
    detailAnimation();
  },

  _uppercasingTitle() {
    const movieTitles = document.querySelectorAll('#detailTitle');
    movieTitles.forEach((movieTitle) => {
      const uppercaseMovieTitle = movieTitle.innerHTML.toUpperCase();
      // eslint-disable-next-line no-param-reassign
      movieTitle.innerHTML = uppercaseMovieTitle;
    });
  },
};

export default Detail;
