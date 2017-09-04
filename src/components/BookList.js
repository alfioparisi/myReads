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
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    {/* Books */}
    <Books />
    {/* Search button */}
    <div className="open-search">
      <Link to="/search">Add a book</Link>
    </div>
  </div>
);

export default BookList;
