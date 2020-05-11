import { types } from './types';

export const addError = (error) => ({ type: types.ERROR_ADD, error });

export const clearError = () => ({ type: types.ERROR_CLEAR });
