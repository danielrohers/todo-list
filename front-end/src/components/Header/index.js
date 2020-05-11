import './style.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import { useStore } from 'src/store';
import { removeToken } from 'src/helpers/token';
import { remove } from 'src/store/user/actions';

export function Header() {
  const { state: { user }, dispatch } = useStore();

  const onClickSignOut = () => {
    removeToken();
    dispatch(remove());
  };

  return (
    <header className="Header">
      <nav>
        <ul className="Header-links">
          <li className="Header-link Header-link--brand">
            <Link to="/">{process.env.REACT_APP_BRAND}</Link>
          </li>

          {user && (
            <li className="Header-link">
              <span>{user.name}</span>
              <FontAwesomeIcon icon={faSignOutAlt} onClick={onClickSignOut} />
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
