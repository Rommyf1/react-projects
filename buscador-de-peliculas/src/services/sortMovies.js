const sortMovies = ({ movies, sortMoviesStrategy }) => {
  const sortedMovies = [...movies].sort(sortMoviesStrategy);
  return sortedMovies;
};

export default sortMovies;
