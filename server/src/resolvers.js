const resolvers = {
  Query: {
    movie: (parent, args, { api } ) => {
      const { id } = args;
      return api.movie(id);
    },
    movies: (parent, args, { api }) => api.movies(),
    person: (parent, args, { api }) => {
      const { id } = args;
      return api.person(id);
    },
  },
  Movie: {
    genre_names: (parent, args, { api }) => api.getGenreNames(parent.genre_ids)
  }
};

module.exports = resolvers;