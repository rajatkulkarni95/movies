import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const AUTH_KEY = process.env.REACT_APP_AUTH_KEY;
const api_endpoint = "https://api.themoviedb.org/3";
const search_endpoint = `${api_endpoint}/search/movie?query`;
const trending_endpoint = `${api_endpoint}/trending/movie/day`;

const config = {
  headers: { Authorization: `Bearer ${AUTH_KEY}` },
};

export const searchMovies = async (keyword) => {
  const result = await axios
    .get(`${search_endpoint}=${keyword}`, config)
    .then((response) => response);

  return result.data;
};

export const fetchMovieDetails = async (movie_id) => {
  const result = await axios
    .get(`${api_endpoint}/${movie_id}`, {
      headers: {
        Authorization: AUTH_KEY,
      },
    })
    .then((response) => response);

  return result;
};

export const getTrendingMovies = () => {
  const result = axios
    .get(`${trending_endpoint}`, config)
    .then((response) => response.data);

  return result;
};
