import './style.scss';

import React from 'react';

import { useStore } from 'src/store'

export function Error() {
  const { state: { error } } = useStore();
  if (!error) return '';

  return (
    <div className="Error">{error.message}</div>
  );
}
