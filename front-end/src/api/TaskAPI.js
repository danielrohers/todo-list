import { ajax } from 'src/helpers/ajax';

export const finished = (id) => ajax.post(`/task/${id}/finished`);

export const remove = (id) => ajax.delete(`/task/${id}`);
