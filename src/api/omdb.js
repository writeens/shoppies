import axios from 'axios';

const OMDB = axios.create({
  baseURL: 'https://www.omdbapi.com/',
});

export default OMDB;
