import { movieListAxios } from "../config/axios";

export const searchMovies = (searchText: string , page : number) => {
  return movieListAxios.get(`list_movies.json?query_term=${searchText}&page=${page}`);
};
