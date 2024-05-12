import { movieListAxios } from "../config/axios";

export const getLatestMovies = () => {
  return movieListAxios.get("list_movies.json?sort_by=");
};
