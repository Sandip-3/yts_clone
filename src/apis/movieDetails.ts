import { movieListAxios } from "../config/axios";

export const movieDetails = (movieId : any) => {
  return movieListAxios.get(`movie_details.json?movie_id=${movieId}`);  
}