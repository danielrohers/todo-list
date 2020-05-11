import { ajax } from 'src/helpers/ajax';

export const list = () => ajax.get('/project');

export const create = (params) => ajax.post('/project', params);

export const update = (id, params) => ajax.put(`/project/${id}`, params);

export const remove = (id) => ajax.delete(`/project/${id}`);

export const addTask = (projectId, params) => ajax.post(`/project/${projectId}/task`, params);
