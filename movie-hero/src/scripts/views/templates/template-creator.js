import ISO6391 from 'iso-639-1';
import CONFIG from '../../global/config';
import { changeDateFormat, changeVoteFormat } from '../../utils/format-changer';
import { director, movieGenre } from '../../utils/detail-filter';

const createMovieDetailTemplate = (movie, movieCrew) => `
    <div class="detail-img" style="background-image: url('${CONFIG.BASE_IMG_URL + movie.poster_path}');"></div>
    <div class="detail-content" id="detailContent">
        <h1 class="detail-title" id="detailTitle">${movie.title}</h1>
        <div class="detail__add-info">
            <div class="detail__add-info__container">
                <p class="detail-rating"><span style="color: gold;">★</span> ${changeVoteFormat(movie.vote_average)}</p>
                <p class="detail-vote">${movie.vote_count} votes</p>
            </div>
            <div class="like-button" id="likeButton"></div>
        </div>
        <p class="detail-tagline" id="detailTagline">${movie.tagline}</p>
        <div class="detail-info" id="detailInfo">
            <div class="detail-info__item">
                <h2>Overview</h2>
                <p>${movie.overview}</p>
            </div>                    
            <div class="more-detail-info" id="moreDetailInfo">
                <div>
                    <div class="detail-info__item">
                        <h2>Director</h2>
                        <p>${director(movieCrew.crew)}</p>
                    </div>
                    <div class="detail-info__item">
                        <h2>Release Date</h2>
                        <p>${changeDateFormat(movie.release_date)}</p>
                    </div>
                    <div class="detail-info__item">
                        <h2>Status</h2>
                        <p>${movie.status}</p>
                    </div>
                    <div class="detail-info__item">
                        <h2>Duration</h2>
                        <p>${movie.runtime} mins</p>
                    </div>                            
                </div>
                <div>
                    <div class="detail-info__item">
                        <h2>Genre</h2>
                        <p>${movieGenre(movie.genres)}</p>
                    </div>
                    <div class="detail-info__item">
                        <h2>Spoken Language</h2>
                        <p>${ISO6391.getName(movie.original_language)}</p>
                    </div>
                    <div class="detail-info__item">
                        <h2>Budget</h2>
                        <p>$ ${movie.budget.toLocaleString()}</p>
                    </div>
                    <div class="detail-info__item">
                        <h2>Revenue</h2>
                        <p>$ ${movie.revenue.toLocaleString()}</p>
                    </div>                  
                </div>
            </div>
        </div>
    </div>
`;

const createMovieItemTemplate = (movie) => `
    <div class="movie-card" onclick="window.location.href = '${`/#/detail/${movie.id}`}';" >
        <div href="#" class="movie-card__atr">
            <img class="lazyload" data-src="${CONFIG.BASE_IMG_URL + movie.poster_path}" alt="${movie.title} image"> 
        </div>
        <div class="card__add-info">
            <p class="release-date">${changeDateFormat(movie.release_date)}</p>
            <p class="rating"><span style="color: gold;">★</span> ${changeVoteFormat(movie.vote_average)}</p>
        </div>
        <p class="movie-title" id="movieTitle">${movie.title}</p>
    </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButtonItem" class="like-button-item" title="Add to Favorites">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likedButtonItem" class="like-button-item" title="Remove from Favorites">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createMovieItemTemplate,
  createMovieDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
