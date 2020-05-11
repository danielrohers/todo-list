import { ajax } from 'src/helpers/ajax';

export const signIn = (params) => ajax.post('/auth/signin', params);

export const signUp = (params) => ajax.post('/auth/signup', params);

export const verify = () => ajax.post('/auth/verify');
