import React from 'react';
import PropTypes from 'prop-types';

/**
  Render the main header.
  @param {function} : change the showNavBar state of 'App'
  @return {object} : header
*/
const Header = ({ onClick }) => (
  <header className="list-books-title">
    <button className="list-books-btn"
      onClick={onClick}
    >Nav Button</button>
    <h1>MyReads</h1>
  </header>
);

Header.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default Header;
