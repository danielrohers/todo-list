import './style.scss';

import React, { useState } from 'react';
import { Tasks } from '../Tasks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Input } from '../Input';
import { useStore } from 'src/store';
import { fetchUpdate, fetchRemove } from 'src/store/project/actions';

function ProjectTitle({ _id, name }) {
  const { dispatch } = useStore();
  const [ edit, setEdit ] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchUpdate(_id, {
      name: e.target.name.value
    }));
    setEdit(false);
  };

  const onClickEdit = () => {
    setEdit(!edit);
  };

  const onClickRemove = () => {
    dispatch(fetchRemove(_id));
  };

  if (edit) {
    return (
      <h3 className="Project-title">
        <form onSubmit={onSubmit}>
          <Input name="name" placeoholder="name" defaultValue={name} required />
        </form>
      </h3>
    );
  }

  return (
    <h3 className="Project-title">
      {name}

      <div className="Project-icons">
        <FontAwesomeIcon icon={faEdit} onClick={onClickEdit} />
        <FontAwesomeIcon icon={faTrashAlt} onClick={onClickRemove} />
      </div>
    </h3>
  );
}

export function Project(props) {
  return (
    <section className="Project box">
      <ProjectTitle {...props} />
      <Tasks tasks={props.tasks} projectId={props._id} />
    </section>
  );
}
