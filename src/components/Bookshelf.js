import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

/**
  Render a list of books with the same reading status.
  If there is no books prop available don't render anything.
  @param {string} : title of this component
  @param {array} : books with the same status
  @param {function} : trigger the reading status change of a book
  @return {object} : list of 'Books'
*/
const Bookshelf = ({ title, books, onChange }) => (
  <section className="bookshelf">
    <h2 className="bookshelf-title">{title}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {books.map((book) => (
          <li key={book.id}>
            <Book
              id={book.id}
              coverURL={book.imageLinks.thumbnail}
              title={book.title}
              authors={book.authors}
              shelf={book.shelf}
              onChange={onChange}
            />
          </li>
        ))}
      </ol>
    </div>
  </section>
);

Bookshelf.propTypes = {
  title: PropTypes.string,
  books: PropTypes.array,
  onChange: PropTypes.func.isRequired
};

export default Bookshelf;
