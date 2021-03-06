import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

// components
import Home from '../components/Home';
import About from '../components/About';

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
  </Switch>
);
