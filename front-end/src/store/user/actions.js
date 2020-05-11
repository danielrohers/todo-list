import { types } from './types';

import { addError } from '../error/actions';
import { signIn, signUp, verify } from '../../api/AuthAPI';
import { checkToken } from 'src/helpers/token';

const fetchSuccess = (data) => ({ type: types.USER_FETCH_SUCCESS, data });

export const remove = () => ({ type: types.USER_REMOVE });

export const fetchSignIn = (params) => async (dispatch) => {
  try {
    const { data } = await signIn(params);
    dispatch(fetchSuccess(data.data));
  } catch (error) {
    dispatch(addError(error.response.data));
  }
};

export const fetchSignUp = (params) => async (dispatch) => {
  try {
    const { data } = await signUp(params);
    dispatch(fetchSuccess(data.data));
  } catch (error) {
    dispatch(addError(error.response.data));
  }
};

export const fetchVerify = () => async (dispatch, state) => {
  checkToken();

  const { data } = await verify();
  dispatch(fetchSuccess(data.data));
};
