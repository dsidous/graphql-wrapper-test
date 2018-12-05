import gql from "graphql-tag";

export const MOVIE_QUERY = gql`
{
  movie(id:200) {
    title
  }
}
`;
