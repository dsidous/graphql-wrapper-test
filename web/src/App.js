import React from 'react';
import Page from './Page';
import {MOVIE_QUERY} from './graphql'
import Movie from './Movie';

const App = () => (
  <Page query={MOVIE_QUERY}>
    {({data}) => <Movie movie={data.movie} />}
  </Page>
);
export default App;
