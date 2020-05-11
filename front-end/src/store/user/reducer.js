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

const remove = (state, ) => ({
  ...state,
  user: undefined,
});

export const reducer = {
  [types.USER_FETCH_SUCCESS]: fetchSuccess,
  [types.USER_REMOVE]: remove
};
