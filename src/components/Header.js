import React from 'react';

const Header = ({ onClick }) => (
  <header className="list-books-title">
    <button className="list-books-btn"
      onClick={onClick}
    >Nav Button</button>
    <h1>MyReads</h1>
  </header>
);

export default Header;
