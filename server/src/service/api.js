require('dotenv').config();
const axios = require('axios');

const APIKEY = process.env.API_KEY;

class Api {
  constructor() {
    this.baseURL = 'https://api.themoviedb.org/3/';
  }

  async movies() {
    const res = await axios(`${this.baseURL}discover/movie?&api_key=${APIKEY}`)
    return res.data.results;    
  }

  async movie(id) {
    const res = await axios(`${this.baseURL}movie/${id}?&api_key=${APIKEY}&append_to_response=credits,similar`);
    return res.data;
  }

  async person(id) {
    const res = await axios(`${this.baseURL}person/${id}?&api_key=${APIKEY}&append_to_response=movie_credits,images`);
    return res.data
  }

  async getGenreNames(ids) {
    const res = await axios(`${this.baseURL}genre/movie/list?&api_key=${APIKEY}`);
    const ret = { genre_name: [].concat(...ids.map(genreId => res.data.genres.filter(genre => genre.id === genreId).map(g =>  g.name)))};
    return ret;
  }

}

module.exports = new Api();
