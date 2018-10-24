const { GraphQLServer } = require('graphql-yoga');
const fs = require('fs');
const { gql } = require('apollo-server-express');
const glob = require('glob');
const path = require('path');

const Api = require('./service/api');
const resolvers = require('./resolvers');

const basePath = path.join(__dirname, './models/');
const schemasPath = glob.sync(`${basePath}**/*.graphql`);

const Query =gql`
  type Query {
    _empty: String
  }
`;

const typeDefs = [
  Query,
  ...schemasPath
    .map(schema => gql(fs.readFileSync(schema, 'utf8'))),
];

const context = { api: Api };
const options = { port: 4000 };
const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context
});
server.start(options, () =>
  console.log(`Server is running on localhost: ${options.port}`));
