import { types } from './types';
import { setToken } from 'src/helpers/token';

const fetchSuccess = (state, { data }) => {
  setToken(data.token);

  return {
    ...state,
    error: null,
    user: { ...data.user },
  };
};

const fetchError = (state, { error }) => ({
  ...state,
  error,
});

export const reducer = {
  [types.AUTH_FETCH_SUCCESS]: fetchSuccess,
  [types.AUTH_FETCH_ERROR]: fetchError
};
