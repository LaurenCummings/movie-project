 import API_KEY from './api_key.js';
 
 const BASE_URL = "https://api.themoviedb.org/3";

 export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
 };

 export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results;
 };

 export const searchPeople = async (query) => {
   const response = await fetch(`${BASE_URL}/search/person?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
   const data = await response.json();
   return data.results;
};

 export const getPopularPeople = async () => {
   const response = await fetch(`${BASE_URL}/person/popular?api_key=${API_KEY}`);
   const data = await response.json();
   return data.results;
 };

 export const getNowShowing = async () => {
  const response = await fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const getCast = async (movieId) => {
   const response = await fetch(`${BASE_URL}/movie/${movieId}/credits?language=en-US&api_key=${API_KEY}`);
   const data = await response.json();
   return data.cast;
};