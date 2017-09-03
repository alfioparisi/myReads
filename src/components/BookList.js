import React from 'react';
import Books from './Books';

/**
  Render an header, the book list and the go-to-searchpage button.
  @param {function} : call the change of 'BooksApp' state
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
      <a onClick={onClick}>Add a book</a>
    </div>
  </div>
);

export default BookList;
