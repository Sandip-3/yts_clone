import axios from "axios";

export const movieListAxios = axios.create({
  baseURL: "https://yts.mx/api/v2/",
});