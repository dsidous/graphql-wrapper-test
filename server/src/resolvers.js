const resolvers = {
  Query: {
    movie: (parent, args, { api } ) => {
      const { id } = args;
      return api.movie(id);
    },
    movies: (parent, args, { api }) => {
      const { query } = args;
      return api.movies(query);
    },
    person: (parent, args, { api }) => {
      const { id } = args;
      return api.person(id);
    },
    tv: (parent, args, { api }) => {
      const { id } = args;
      return api.tv(id);
    },
    tvSeason: (parent, args, { api }) => {
      const { id, season } = args;
      return api.tvSeason(id,season);
    }
  },
  Movie: {
    genre_names: (parent, args, { api }) => api.getGenreNames(parent.genre_ids)
  }
};

module.exports = resolvers;