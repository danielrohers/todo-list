import { ajax } from './ajax';

const TOKEN_KEY = 'token';

export const setToken = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
  ajax.defaults.headers.common['x-access-token'] = token;
};

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const checkToken = () => {
  const token = getToken();
  if (token) setToken(token);
}
