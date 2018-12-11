import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//import App from './App';
import Movie from './components/pages/Movie';

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Movie} />
    </Switch>
  </BrowserRouter>
);
