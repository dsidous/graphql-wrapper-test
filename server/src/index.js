const { GraphQLServer } = require('graphql-yoga');
const Api = require('./service/api');
const resolvers = require('./resolvers');

const context = { api: Api };
const options = { port: 4000 };
const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context
});
server.start(options, () =>
  console.log(`Server is running on localhost: ${options.port}`));
