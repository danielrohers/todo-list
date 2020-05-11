import { types } from './types';

const list = (state, { data }) => ({
  ...state,
  error: null,
  projects: [...data],
});

export const reducer = {
  [types.PROJECT_FETCH_SUCCESS]: list
};
