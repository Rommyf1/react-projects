function sortByYear(nextMovie, actualMovie) {
  return parseInt(nextMovie.year) - parseInt(actualMovie.year);
}

function sortByName(nextMovie, actualMovie) {
  return nextMovie.title.localeCompare(actualMovie.title);
}

const filterMoviesMethods = {
  sortByYear,
  sortByName,
};

const setSortMethod = (sortMethod) => {
  return filterMoviesMethods[sortMethod];
};

export default setSortMethod;
