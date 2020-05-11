import { finished, remove } from 'src/api/TaskAPI';

import { addError } from '../error/actions';
import { fetchList } from '../project/actions';

export const fetchFinished = (taskId) => async (dispatch) => {
  try {
    await finished(taskId);
    fetchList()(dispatch);
  } catch (error) {
    dispatch(addError(error.response.data));
  }
};

export const fetchRemove = (taskId) => async (dispatch) => {
  try {
    await remove(taskId);
    fetchList()(dispatch);
  } catch (error) {
    dispatch(addError(error.response.data));
  }
};
