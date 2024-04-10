import { apiURL, apiKey } from "../constants/moviesConstants";

export default function setQueryURL({ search }) {
  const movieQueryURL = new URL(apiURL);
  movieQueryURL.searchParams.set("apiKey", apiKey);
  movieQueryURL.searchParams.set("s", search);
  return movieQueryURL.href;
}
