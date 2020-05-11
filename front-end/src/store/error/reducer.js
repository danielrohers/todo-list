import { types } from './types';

const clearError = (state) => ({
  ...state,
  error: null
});

const addError = (state, { error }) => ({
  ...state,
  error,
});

export const reducer = {
  [types.ERROR_CLEAR]: clearError,
  [types.ERROR_ADD]: addError
};
