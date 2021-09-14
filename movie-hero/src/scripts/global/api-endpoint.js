import CONFIG from './config';

const API_ENDPOINT = {
  NOW_PLAYING: `${CONFIG.BASE_URL}movie/now_playing?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}`,
  POPULAR: `${CONFIG.BASE_URL}movie/popular?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}`,
  UPCOMING: `${CONFIG.BASE_URL}movie/upcoming?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}`,
  DETAIL: (id) => `${CONFIG.BASE_URL}movie/${id}?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}`,
  CREW: (id) => `${CONFIG.BASE_URL}movie/${id}/credits?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}`,
};

export default API_ENDPOINT;
