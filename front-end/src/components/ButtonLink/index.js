import './style.scss';

import React from 'react';

export function ButtonLink(props) {
  return (
    <button {...props} type="button" className="ButtonLink">{props.children}</button>
  );
}
