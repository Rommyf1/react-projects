import setSortMethod from "../utils/sortMoviesFilters";
import sortMovies from "../services/sortMovies.js";

export default function useSortMovies() {
  const sortMoviesByFilter = ({ sortMoviesFilter, movies }) => {
    if (sortMoviesFilter === "none") {
      return movies;
    } else {
      const sortMoviesStrategy = setSortMethod(sortMoviesFilter);
      const filteredMovies = sortMovies({ movies, sortMoviesStrategy });
      return filteredMovies;
    }
  };

  return { sortMoviesByFilter };
}
