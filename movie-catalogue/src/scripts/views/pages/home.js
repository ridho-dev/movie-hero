import TheMovieDbSource from '../../data/themoviedb-source';
import { createMovieItemTemplate } from '../templates/template-creator';
import { homeResponsive } from '../../utils/page-responsive/home-responsive';
import { cardAnimation, homeAnimation } from '../../utils/animation/animation';

const Home = {
  async render() {
    return `
        <section class="hero" id="hero">
            <div class="hero-container">
                <h1>Stay updated for newest movies!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </section>
        <section class="home-content">
            <div class="home-content__container">
                <h1>POPULAR MOVIES</h1>
                <!-- the class used here is the same with the home page -->
                <div class="home-content__movie-card" id="popularMovieContainer">

                </div>
            </div>
            <div class="home-content__view-all">
                    <a href="#/popular/1">View More ></a>
                </div>
        </section>
        <section class="home-content dark-blue__bg">
            <div class="home-content__container">
                <h1>NOW PLAYING MOVIES</h1>
                <!-- the class used here is the same with the home page -->
                <div class="home-content__movie-card" id="nowPlayingMovieContainer">

                </div>
            </div>
            <div class="home-content__view-all">
                    <a href="#/now-playing/1">View More ></a>
                </div>
        </section>
        <section class="home-content">
            <div class="home-content__container">
                <h1>UPCOMING MOVIES</h1>
                <!-- the class used here is the same with the home page -->
                <div class="home-content__movie-card" id="upcomingMovieContainer">

                </div>
            </div>
            <div class="home-content__view-all">
                    <a href="#/upcoming/1">View More ></a>
                </div>
        </section>
    `;
  },

  async afterRender() {
    const popularMovies = await TheMovieDbSource.popularMovies(1);
    const popularMoviesContainer = document.querySelector('#popularMovieContainer');
    popularMovies.slice(0, homeResponsive()).forEach((movie) => {
      popularMoviesContainer.innerHTML += createMovieItemTemplate(movie);
    });

    const nowPlayingMovies = await TheMovieDbSource.nowPlayingMovies(1);
    const nowPlayingMoviesContainer = document.querySelector('#nowPlayingMovieContainer');
    nowPlayingMovies.slice(0, homeResponsive()).forEach((movie) => {
      nowPlayingMoviesContainer.innerHTML += createMovieItemTemplate(movie);
    });

    const upcomingMovies = await TheMovieDbSource.upcomingMovies(1);
    const upcomingMoviesContainer = document.querySelector('#upcomingMovieContainer');
    upcomingMovies.slice(0, homeResponsive()).forEach((movie) => {
      upcomingMoviesContainer.innerHTML += createMovieItemTemplate(movie);
    });
    cardAnimation();
    homeAnimation();
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

export default Home;
