import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

/**
  Render the navbar.
  @param {boolean} : whether to show this component or not
  @param {function} : change the showNavBar state of 'App'
  @return {object} : navbar
*/
const NavBar = ({ isOnScreen, onClick }) => (
  <nav
    className={classNames({
      'nav-main': true,
      'nav-main-active': isOnScreen
    })}
  >
    <ul className="nav-list">
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

      <li className="nav-item"><NavLink to="/search"
        className="nav-link"
        activeClassName="nav-link-active"
        onClick={onClick}
      >Search</NavLink></li>

      <li className="nav-item"><NavLink to="/books/moveBooks"
        className="nav-link"
        activeClassName="nav-link-active"
        onClick={onClick}
      >Move books</NavLink></li>
    </ul>
  </nav>
);

NavBar.propTypes = {
  isOnScreen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default NavBar;
