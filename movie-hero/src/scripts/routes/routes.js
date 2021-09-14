import Detail from '../views/pages/detail';
import Home from '../views/pages/home';
import Popular from '../views/pages/popular';
import Upcoming from '../views/pages/upcoming';
import Favorites from '../views/pages/favorites';
import NowPlaying from '../views/pages/now-playing';

const routes = {
  '/': Home,
  '/home': Home,
  '/popular/:id': Popular,
  '/detail/:id': Detail,
  '/now-playing/:id': NowPlaying,
  '/upcoming/:id': Upcoming,
  '/favorites': Favorites,

};

export default routes;
