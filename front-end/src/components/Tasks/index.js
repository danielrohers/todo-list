import './style.scss';

import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import { useStore } from 'src/store';
import { fetchFinished, fetchRemove } from 'src/store/task/actions';

import { TaskForm } from '../TaskForm';
import { Checkbox } from '../Checkbox';

function Task(props) {
  const { dispatch } = useStore();

  const { _id, finished, description } = props;

  const setFinished = () => {
    dispatch(fetchFinished(_id));
  };

  const onClickRemove = () => {
    dispatch(fetchRemove(_id));
  };

  return (
    <li className="Task">
      <Checkbox id={_id} checked={finished} disabled={finished} onChange={setFinished}>
        {description}
      </Checkbox>

      { !finished && <FontAwesomeIcon icon={faTrashAlt} onClick={onClickRemove} /> }
    </li>
  );
}

export function Tasks({ tasks, projectId }) {
  const getList = (filter) => (title) => {
    const list = tasks.filter(filter);

    if (list.length === 0) return '';

    return (
      <Fragment>
        <h4>{title}</h4>
        <ul className="Tasks-list">
          {list.map(task => <Task key={task._id} {...task} />)}
        </ul>
      </Fragment>
    );
  }

  return (
    <section className="Tasks">
      { getList(task => !task.finished)('To Do') }
      { getList(task => task.finished)('Done') }

      <TaskForm projectId={projectId} />
    </section>
  );
};

Tasks.defaultProps= {
  tasks: []
};
