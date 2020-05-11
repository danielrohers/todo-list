import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import { useStore } from 'src/store';
import { fetchVerify } from 'src/store/user/actions';

import { Header } from '../components/Header';
import { PrivateRoute } from '../components/PrivateRoute';
import { Auth } from './Auth';
import { Home } from './Home';

export function Routes() {
  const { state: { user }, dispatch } = useStore();

  if (!user) {
    dispatch(fetchVerify());
  }

  return (
    <Router>
      <Fragment>
        <Header />

        <main>
          <Switch>
            <Route path="/auth">
              <Auth />
            </Route>

            <PrivateRoute path="/">
              <Home />
            </PrivateRoute>
          </Switch>
        </main>
      </Fragment>
    </Router>
  );
}
