import './style.scss';

import React from 'react';
import { Link } from 'react-router-dom';

function HeaderLink({ href, text }) {
  return (
    <li className="Header-link">
      <Link to={href}>{text}</Link>
    </li>
  );
}

export function Header() {
  
  const links = [
    {
      href: '/',
      text: process.env.REACT_APP_BRAND
    },
    {
      href: '/about',
      text: 'About'
    }
  ]

  return (
    <header className="Header">
      <nav>
        <ul className="Header-links">
          {links.map(link => <HeaderLink key={link.href} {...link} />)}
        </ul>
      </nav>
    </header>
  );
}
