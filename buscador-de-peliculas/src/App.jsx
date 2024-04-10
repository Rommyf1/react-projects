import "./App.css";
import ListOfMovies from "./components/ListOfMovies";
import useMovies from "./hooks/useMovies";
import useSearch from "./hooks/useSearch";
import { useCallback, useState } from "react";
import debounce from "just-debounce-it";

function App() {
  const [sortMoviesFilter, setSortMovies] = useState("none");
  const { search, inputError, setSearch } = useSearch();
  const { movies, moviesError, loading, getMovies } = useMovies({
    search,
    sortMoviesFilter,
  });

  const debounceGetMovies = useCallback(
    debounce((search) => {
      getMovies({ search });
    }, 600),
    [getMovies]
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputError) return;
    getMovies({ search });
  };

  const handleChange = (event) => {
    const inputSearch = event.target.value;
    if (inputSearch.startsWith(" ")) return;
    setSearch(inputSearch);
    debounceGetMovies(inputSearch);
  };

  const handleSortOption = (event) => {
    const sortOption = event.target.value;
    setSortMovies(sortOption);
  };

  return (
    <>
      <h1 className="p-4 text-white"> Buscador de Películas</h1>
      <search role="search" className="block my-8">
        <form className="flex gap-2 justify-center" onSubmit={handleSubmit}>
          <input
            className="p-1 bg-slate-400/20 border border-slate-200 rounded outline-none text-white"
            name="query"
            type="search"
            placeholder="Matrix, Avatar, Star trek, ..."
            onChange={handleChange}
            value={search}
          />
          <button
            className="p-1 px-2 bg-sky-500 rounded text-white"
            type="submit"
          >
            Buscar
          </button>
          {movies.length > 1 && (
            <label htmlFor="sortMoviesFilter">
              <select
                name="sortMoviesFilter"
                value={sortMoviesFilter}
                onChange={handleSortOption}
              >
                <option value="none">No ordenar</option>
                <option value="sortByName">Ordenar por Nombres</option>
                <option value="sortByYear">Ordenar por Año</option>
              </select>
            </label>
          )}
        </form>
        {inputError && <p className="text-red-500 mt-6">{inputError}</p>}
        {moviesError && <p className="text-red-500 mt-6">{inputError}</p>}
      </search>
      <main className="w-screen flex flex-col items-center">
        {loading ? (
          <h3 className="text-white">Cargando</h3>
        ) : (
          <ListOfMovies listOfMovies={movies} />
        )}
      </main>
    </>
  );
}

export default App;
