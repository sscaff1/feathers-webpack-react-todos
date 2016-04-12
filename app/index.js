import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Layout } from './layout';
import { Home } from './components/home';
import { ViewList } from './components/lists';

render((
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home} />
      <Route path="list/:_id" component={ViewList} />
    </Route>
  </Router>
), document.getElementById('app'));
