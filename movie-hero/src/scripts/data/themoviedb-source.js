import API_ENDPOINT from '../global/api-endpoint';

class TheMovieDbSource {
  static async nowPlayingMovies(page) {
    const response = await fetch(`${API_ENDPOINT.NOW_PLAYING}&page=${page}`);
    const responseJson = await response.json();
    return responseJson.results;
  }

  static async popularMovies(page) {
    const response = await fetch(`${API_ENDPOINT.POPULAR}&page=${page}`);
    const responseJson = await response.json();
    return responseJson.results;
  }

  static async upcomingMovies(page) {
    const response = await fetch(`${API_ENDPOINT.UPCOMING}&page=${page}`);
    const responseJson = await response.json();
    return responseJson.results;
  }

  static async detailMovie(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }

  static async detailMovieCrew(id) {
    const response = await fetch(API_ENDPOINT.CREW(id));
    return response.json();
  }
}

export default TheMovieDbSource;
