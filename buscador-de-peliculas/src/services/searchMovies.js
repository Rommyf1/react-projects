import movieQueryURL from "../utils/formatURL";
import mapData from "../utils/mapData";

export default async function searchMovies({ search }) {
  const movieURL = movieQueryURL({ search });
  return fetch(movieURL)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `Error al realizar la petición. Código de Error ${response.status}: ${response.statusText}`
        );
      }
      return response.json();
    })
    .then((moviesData) => {
      if (!moviesData.Search) {
        return [];
      } else {
        const movies = moviesData.Search;
        const mappedMovies = mapData({ movies });
        return mappedMovies;
      }
    });
}
