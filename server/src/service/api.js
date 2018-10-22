require('dotenv').config();
const axios = require('axios');

const APIKEY = process.env.API_KEY;

class Api {
  constructor() {
    this.baseURL = 'https://api.themoviedb.org/3/';
  }

  movies() {
    return axios(`${this.baseURL}discover/movie?&api_key=${APIKEY}`)
      .then(res => res.data.results);    
  }

  movie(id) {
    return axios(`${this.baseURL}movie/${id}?&api_key=${APIKEY}`)
    .then(res => res.data);
  }

  person(id) {
    return axios(`${this.baseURL}person/${id}?&api_key=${APIKEY}`)
    .then(res => res.data);
  }

}

module.exports = new Api();
