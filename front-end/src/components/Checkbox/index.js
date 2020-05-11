import './style.scss';

import React, { Fragment } from 'react';

export function Checkbox({ children, ...props }) {
  return (
    <Fragment>
      <input {...props} type="checkbox" className="Checkbox" />
      <label htmlFor={props.id} className="Checkbox-label">{children}</label>
    </Fragment>
  );
}
