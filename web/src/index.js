import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ApolloProvider } from "react-apollo";

import * as serviceWorker from './serviceWorker';
import { client } from './apollo';
import { Routes } from './Routes';

ReactDOM.render(
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>
, document.getElementById('root'));

serviceWorker.unregister();
