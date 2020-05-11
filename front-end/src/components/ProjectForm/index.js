import './style.scss';

import React, { Fragment } from 'react';

import { Input } from '../Input';
import { Button } from '../Button';
import { useStore } from 'src/store';
import { fetchCreate } from 'src/store/project/actions';
import { ButtonLink } from '../ButtonLink';

export function ProjectForm({ open, handleOpen }) {
  const { dispatch } = useStore();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchCreate({
      name: e.target.name.value
    }));
  };

  if (!open) return '';

  return (
    <Fragment>
      <div className="ProjectForm-layer" />
      <section className="ProjectForm">
        <h3 className="ProjectForm-title">Create a new project</h3>
        <form onSubmit={onSubmit}>
          <Input name="name" placeholder="Name" required />
          <Button type="submit">Create project</Button>
          <ButtonLink onClick={handleOpen}>Cancel</ButtonLink>
        </form>
      </section>
    </Fragment>
  );
};

ProjectForm.defaultProps = {
  open: false
};
