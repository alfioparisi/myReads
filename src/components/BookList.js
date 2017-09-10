import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from './Header';
import Books from './Books';

/**
  Render an header, the book list and the go-to-searchpage button.
  @param {function} : change the showNavBar state of 'App'
  @return {object} : 'div' containing the 'Books' component
*/
const BookList = ({ onClick, showNavBar, books, handleBook }) => (
  <div className="list-books">
    {/* Header */}
    <Header onClick={onClick} showNavBar={showNavBar} />
    {/* Books */}
    <Books books={books} handleBook={handleBook} />
    {/* Search button */}
    <footer className="open-search">
      <Link to="/search">Add a book</Link>
    </footer>
  </div>
);

BookList.propTypes = {
  onClick: PropTypes.func.isRequired,
  showNavBar: PropTypes.bool.isRequired,
  books: PropTypes.array.isRequired,
  handleBook: PropTypes.func.isRequired
}

export default BookList;
