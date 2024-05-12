import { movieListAxios } from "../config/axios";

export const getMovieList = (page:number) => {
  return movieListAxios.get(`list_movies.json?page=${page}`);
};
