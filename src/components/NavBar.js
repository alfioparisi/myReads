import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <nav className="nav-main">
    <ul className="nav-list">
      <li className="nav-item"><NavLink to="/"
        className="nav-link"
        activeClassName="nav-link-active"
      >Home</NavLink></li>
      <li className="nav-item"><NavLink to="/search"
        className="nav-link"
        activeClassName="nav-link-active"
      >Search</NavLink></li>
    </ul>
  </nav>
);

export default NavBar;
