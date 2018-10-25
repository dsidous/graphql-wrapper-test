require('dotenv').config();
const axios = require('axios');

const APIKEY = process.env.API_KEY;

class Api {
  constructor() {
    this.baseURL = 'https://api.themoviedb.org/3/';
  }

  async movies(query) {
    const res = await axios(`${this.baseURL}discover/movie?&api_key=${APIKEY}&${query}`);
    return res.data.results;    
  }

  async movie(id) {
    const res = await axios(`${this.baseURL}movie/${id}?&api_key=${APIKEY}&append_to_response=credits,similar,videos,reviews`);
    const videos = res.data.videos.results;
    const reviews = res.data.reviews.results;
    res.data.videos = videos;
    res.data.reviews = reviews;
    return res.data;
  }

  async person(id) {
    const res = await axios(`${this.baseURL}person/${id}?&api_key=${APIKEY}&append_to_response=movie_credits,images`);
    const images = res.data.images.profiles;
    res.data.images = images;
    return res.data
  }

  async getGenreNames(ids) {
    const res = await axios(`${this.baseURL}genre/movie/list?&api_key=${APIKEY}`);
    const ret = { genre_name: [].concat(...ids.map(genreId => res.data.genres.filter(genre => genre.id === genreId).map(g =>  g.name)))};
    return ret;
  }

  async tv(id) {
    const res = await axios(`${this.baseURL}tv/${id}?&api_key=${APIKEY}&append_to_response=credits,images`);
    return res.data
  }

}

module.exports = new Api();
