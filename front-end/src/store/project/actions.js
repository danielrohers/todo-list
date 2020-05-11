import { types } from './types';

import { addError } from '../error/actions';
import { list, create, addTask, update, remove } from '../../api/ProjectAPI';

const fetchSuccess = (data) => ({ type: types.PROJECT_FETCH_SUCCESS, data });

export const fetchList = () => async (dispatch) => {
  try {
    const { data } = await list();
    dispatch(fetchSuccess(data.data));
  } catch (error) {
    dispatch(addError(error.response.data));
  }
};

export const fetchCreate = (params) => async (dispatch) => {
  try {
    await create(params);
    fetchList()(dispatch);
  } catch (error) {
    dispatch(addError(error.response.data));
  }
};

export const fetchUpdate = (id, params) => async (dispatch) => {
  try {
    await update(id, params);
    fetchList()(dispatch);
  } catch (error) {
    dispatch(addError(error.response.data));
  }
};

export const fetchRemove = (id) => async (dispatch) => {
  try {
    await remove(id);
    fetchList()(dispatch);
  } catch (error) {
    dispatch(addError(error.response.data));
  }
};

export const fetchAddTask = (projectId, params) => async (dispatch, { projects = [] }) => {
  try {
    await addTask(projectId, params);
    fetchList()(dispatch);
  } catch (error) {
    dispatch(addError(error.response.data));
  }
};
