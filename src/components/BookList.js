import React from 'react';
import { Link } from 'react-router-dom';
import Books from './Books';

/**
  Render an header, the book list and the go-to-searchpage button.
  @return {object} : 'div' containing the 'Books' component
*/
const BookList = ({ onClick }) => (
  <div className="list-books">
    {/* Header */}
    <header className="list-books-title">
      <button className="list-books-btn"
        onClick={onClick}
      >Nav Button</button>
      <h1>MyReads</h1>
    </header>
    {/* Books */}
    <Books />
    {/* Search button */}
    <div className="open-search">
      <Link to="/search">Add a book</Link>
    </div>
  </div>
);

export default BookList;
