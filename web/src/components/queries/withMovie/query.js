import gql from 'graphql-tag';

export const query = gql`
  query getMovie($movieId: ID!) {
    movie(id: $movieId) {
      title
    }
  }
`;
