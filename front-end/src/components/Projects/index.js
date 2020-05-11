import './style.scss';

import React, { useEffect, useState } from 'react';

import { useStore } from 'src/store';
import { Project } from '../Project';
import { ProjectForm } from '../ProjectForm';
import { fetchList } from 'src/store/project/actions';
import { ButtonLink } from '../ButtonLink';

export function Projects() {
  const [ openNewProject, setOpenNewProject ] = useState(false);
  const { state: { projects }, dispatch } = useStore();

  const handleOpen = () => {
    setOpenNewProject(!openNewProject);
  };

  useEffect(() => {
    dispatch(fetchList());
  }, [dispatch]);

  useEffect(() => {
    if (Array.isArray(projects)) {
      setOpenNewProject(projects.length === 0);
    }
  }, [projects]);

  return (
    <div className="Projects">
      <ButtonLink onClick={handleOpen}>New Project</ButtonLink>
      {projects && (
        <div className="Projects-list">
          {projects.map(project => <Project key={project._id} {...project} />)}
        </div>
      )}
      <ProjectForm open={openNewProject} handleOpen={handleOpen} />
    </div>
  );
};
