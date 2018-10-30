require('dotenv').config();
const axios = require('axios');

const APIKEY = process.env.API_KEY;

class Api {
  constructor() {
    this.baseURL = 'https://api.themoviedb.org/3/';
  }

  async movies(query) {
    const {data:{results}} = await axios(`${this.baseURL}discover/movie?&api_key=${APIKEY}&${query}`);
    return results;    
  }

  async movie(id) {
    const {data} = await axios(`${this.baseURL}movie/${id}?&api_key=${APIKEY}&append_to_response=credits,similar,videos,reviews`);
    const {
        videos:{results:videos}, 
        reviews:{results:reviews}
    } = data;
    return {...data, videos, reviews};
  }

  async person(id) {
    const {data} = await axios(`${this.baseURL}person/${id}?&api_key=${APIKEY}&append_to_response=movie_credits,tv_credits,images`);
    const {images:{profiles:images}} = data;    
    return {...data, images}
  }

  async getGenreNames(ids) {
    const {data} = await axios(`${this.baseURL}genre/movie/list?&api_key=${APIKEY}`);
    const ret = { genre_name: [].concat(...ids.map(genreId => data.genres.filter(genre => genre.id === genreId).map(g =>  g.name)))};
    return ret;
  }

  async tv(id) {
    const {data} = await axios(`${this.baseURL}tv/${id}?&api_key=${APIKEY}&append_to_response=credits,images`);
    return data
  }

  async tvSeason(id, season) {
    const {data} = await axios(`${this.baseURL}tv/${id}/season/${season}?&api_key=${APIKEY}`);
    return data;
  }

}

module.exports = new Api();
