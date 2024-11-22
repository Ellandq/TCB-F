// utils/rickAndMortyApi.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
});

export const fetchEpisodesBySeason = (season) => api.get(`/episode?season=${season}`);
export const fetchEpisodeById = (id) => api.get(`/episode/${id}`);
export const fetchCharacterById = (id) => api.get(`/character/${id}`);

export default api;
