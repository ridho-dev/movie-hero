const director = (crews) => {
  let directorName;
  crews.forEach((crew) => {
    if (crew.job === 'Director') {
      directorName = crew.name;
    }
  });
  return directorName;
};

const movieGenre = (genres) => {
  let allGenre = '';
  let index = 0;
  genres.forEach((genre) => {
    allGenre += `${genre.name}`;
    if (index !== genres.length - 1) {
      allGenre += ', ';
    }
    index += 1;
  });
  return allGenre;
};

export { director, movieGenre };
