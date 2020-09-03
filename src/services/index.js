import axios from "axios";

//const API_KEY = process.env.REACT_APP_API_KEY;
const AUTH_KEY = process.env.REACT_APP_AUTH_KEY;
const api_endpoint = "https://api.themoviedb.org/3";
const search_endpoint = `${api_endpoint}/search/movie?query`;
const trending_endpoint = `${api_endpoint}/trending/movie/day?`;

const config = {
  headers: { Authorization: `Bearer ${AUTH_KEY}` },
};

export const searchMovies = async (keyword) => {
  const { data } = await axios.get(`${search_endpoint}=${keyword}`, config);

  return data;
};

export const getMovieDetails = async (movie_id) => {
  const { data } = await axios.get(`${api_endpoint}/movie/${movie_id}`, config);
  return data;
};

export const getCastDetails = async (movie_id) => {
  const { data } = await axios.get(
    `${api_endpoint}/movie/${movie_id}/credits`,
    config
  );
  return data;
};

export const getTrendingMovies = async (pageNumber) => {
  const { data } = await axios.get(
    `${trending_endpoint}page=${pageNumber}`,
    config
  );

  return data;
};
