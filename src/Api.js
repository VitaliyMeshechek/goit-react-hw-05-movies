import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'f983fc840eb543faba07dcbe6db19b0b';

// Список самых популярых фильмов на сегодня
export const fetchMoviesTrending = async () => {
  const response = await axios.get(
    `${BASE_URL}trending/movie/day?api_key=${API_KEY}`
  );
  return response.data;
};

// Поиск кинофильма по ключевому слову
export const fetchSearchMovies = async (searchQuery, page) => {
  const response = await axios.get(
    `${BASE_URL}search/movie?api_key=${API_KEY}&query=${searchQuery}&page=${page}`
  );
  return response.data;
};

// Запрос полной информации о фильме
export const fetchMoviesDetails = async (id) => {
  const response = await axios.get(
    `${BASE_URL}movie/${id}?api_key=${API_KEY}`
  );
  return response.data;
};

// Запрос информации о актёрском составе
export const fetchMovieCredits = async (id) => {
  const response = await axios.get(
    `${BASE_URL}movie/${id}//credits?api_key=${API_KEY}`
  );
  return response.data;
};

// Запрос обзоров
export const fetchMovieReviews = async (id) => {
  const response = await axios.get(
    `${BASE_URL}movie/${id}//reviews?api_key=${API_KEY}`
  );
  return response.data;
};

