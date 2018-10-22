const { GraphQLServer } = require('graphql-yoga');
const Api = require('./service/api');

const resolvers = {
  Query: {
    movie: (parent, args) => {
      const { id } = args;
      return Api.movie(id);
    },
    movies: () => Api.movies(),
    person: (parent, args) => {
      const { id } = args;
      return Api.person(id);
    },
  }
};

const options = { port: 4000 };
const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers
});
server.start(options, () =>
  console.log(`Server is running on localhost: ${options.port}`));
