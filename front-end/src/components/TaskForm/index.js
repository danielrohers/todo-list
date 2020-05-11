import './style.scss';

import React from 'react';
import PropTypes from 'prop-types';

import { Input } from '../Input';
import { Button } from '../Button';
import { useStore } from 'src/store';
import { fetchAddTask } from 'src/store/project/actions';

export function TaskForm({ projectId }) {
  const { dispatch } = useStore();

  const onSubmit = (e) => {
    e.preventDefault();
    const { target } = e;
    
    dispatch(fetchAddTask(projectId, {
      description: target.description.value
    }));

    target.reset();
  };

  return (
    <section className="TaskForm">
      <form onSubmit={onSubmit}>
        <Input name="description" placeholder="Description" required />
        <Button type="submit">Add</Button>
      </form>
    </section>
  );
};

TaskForm.propTypes = {
  projectId: PropTypes.string.isRequired
};
