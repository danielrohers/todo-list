import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useStore } from 'src/store';

const render = (children, user) => () => {
  if (user) return children;
  return <Redirect to='/auth' />;
};

export function PrivateRoute({ children, ...props }) {
  const { state: { user } } = useStore();

  return (
    <Route
      {...props}
      render={render(children, user)}
    />
  );
}
