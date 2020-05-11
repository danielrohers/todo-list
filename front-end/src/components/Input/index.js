import './style.scss';
import React from 'react';

export function Input(props) {
  return (
    <input {...props} className="Input" />
  );
}

Input.defaultProps = {
  type: 'text'
};
