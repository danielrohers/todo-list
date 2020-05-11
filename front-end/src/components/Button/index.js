import './style.scss';

import React from 'react';

export function Button(props) {
  return (
    <button {...props} className="Button">{props.children}</button>
  );
}

Button.defaultProps = {
  type: 'button'
};
