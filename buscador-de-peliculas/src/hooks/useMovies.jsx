import { useState, useRef, useMemo, useCallback } from "react";
import searchMovies from "../services/searchMovies";
import useSortMovies from "./useSortMovies";

export default function useMovies({ search, sortMoviesFilter }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [moviesError, setError] = useState(null);
  const previousSearch = useRef(search);
  const { sortMoviesByFilter } = useSortMovies();

  const getMovies = useCallback(async ({ search }) => {
    if (!search) {
      setMovies([]);
    } else if (previousSearch.current == search) {
      return;
    } else {
      try {
        setLoading(true);
        setError(null);
        previousSearch.current = search;
        const responseMovies = await searchMovies({ search });
        setMovies(responseMovies);
      } catch (error) {
        setError(error);
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  }, []);

  useMemo(() => {
    setMovies(sortMoviesByFilter({ sortMoviesFilter, movies }));
  }, [sortMoviesFilter]);

  return {
    movies,
    moviesError,
    loading,
    getMovies,
  };
}
