import { movieListAxios } from "../config/axios";

export const suggestionMovies = (movieID : any) => {
    return movieListAxios.get(`movie_suggestions.json?movie_id=${movieID}`);
}