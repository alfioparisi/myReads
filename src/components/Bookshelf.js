import React from 'react';
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
  <div className="bookshelf">
    <h2 className="bookshelf-title">{title}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {books.map(({ id, imageLinks, title, authors, shelf }) => (
          <li key={id}>
            <Book
              id={id}
              coverURL={imageLinks.thumbnail}
              title={title}
              authors={authors.join(', ')}
              shelf={shelf}
              onChange={onChange}
            />
          </li>
        ))}
      </ol>
    </div>
  </div>
);

export default Bookshelf;
