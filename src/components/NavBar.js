import React from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

const NavBar = ({ isOnScreen, onClick }) => (
  <nav
    className={classNames({
      'nav-main': true,
      'nav-main-active': isOnScreen
    })}
  >
    <ul className="nav-list">
      <li className="nav-item"><NavLink to="/search"
        className="nav-link"
        activeClassName="nav-link-active"
        onClick={onClick}
      >Search</NavLink></li>

      <li className="nav-item"><NavLink to="/"
        className="nav-link"
        activeClassName="nav-link-active"
        onClick={onClick}
      >Home</NavLink></li>

      <li className="nav-item"><NavLink to="/books/currentlyReading"
        className="nav-link"
        activeClassName="nav-link-active"
        onClick={onClick}
      >Reading</NavLink></li>

      <li className="nav-item"><NavLink to="/books/wantToRead"
        className="nav-link"
        activeClassName="nav-link-active"
        onClick={onClick}
      >Want to Read</NavLink></li>

      <li className="nav-item"><NavLink to="/books/read"
        className="nav-link"
        activeClassName="nav-link-active"
        onClick={onClick}
      >Read</NavLink></li>
    </ul>
  </nav>
);

export default NavBar;
