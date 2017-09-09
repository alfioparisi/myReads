import React from 'react';
import PropTypes from 'prop-types';
import NavBar from './NavBar';

/**
  Render the main header.
  @param {function} : change the showNavBar state of 'App'
  @param {boolean} : whether to show the navbar or not
  @return {object} : header
*/
const Header = ({ onClick, showNavBar }) => (
  <header className="list-books-title">
    <button className="list-books-btn"
      onClick={onClick}
    >Nav Button</button>
    <h1>MyReads</h1>
    <NavBar isOnScreen={showNavBar}
      onClick={onClick}
    />
  </header>
);

Header.propTypes = {
  onClick: PropTypes.func.isRequired,
  showNavBar: PropTypes.bool.isRequired
}

export default Header;
