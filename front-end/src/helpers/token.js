import { ajax } from './ajax';

const TOKEN_KEY = 'token';

const setTokenAjax = (token) => {
  ajax.defaults.headers.common['x-access-token'] = token;
}

export const setToken = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
  setTokenAjax(token);
};

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const checkToken = () => {
  const token = getToken();
  if (token) setToken(token);
}

export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY);
  setTokenAjax(undefined);
}
