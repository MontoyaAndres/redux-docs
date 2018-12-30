import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  StaticRouter,
  Switch,
  Route
} from 'react-router-dom';

// Routes
import routes from '../shared/routes';

export default ({ server, location, context }) => {
  const routeMap = routes.map((route, index) => <Route key={index} {...route} />);

  // Client router
  let router = (
    <Router>
      <Switch>
        {routeMap}
      </Switch>
    </Router>
  );

  // Server router
  if (server) {
    router = (
      <StaticRouter location={location} context={context}>
        <Switch>
          {routeMap}
        </Switch>
      </StaticRouter>
    );
  }

  return (
    <Fragment>
      {router}
    </Fragment>
  );
};
