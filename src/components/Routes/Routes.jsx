import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import RouteContainer from './RouteContainer';

const Routes = ({ routes, ...props }) => {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          {...props}
          // Create routeChecker for authorizations.
          render={renderProps => <RouteContainer {...renderProps} route={route} {...props} />}
        />
      ))}
    </Switch>
  );
};

Routes.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default Routes;
