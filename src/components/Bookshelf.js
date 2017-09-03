import React from 'react';
import Book from './Book';

/**
  Render a list of books with the same reading status.
  If there is no books prop available don't render anything.
  @param {string} : title of this component
  @param {array} : books with the same status
  @return {object} : list of 'Books'
*/
const Bookshelf = ({ title, books }) => {
  return books ? (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map(({ id, imageLinks, title, authors }) => (
            <li key={id}>
              <Book
                coverURL={imageLinks.thumbnail}
                title={title}
                authors={authors.join(', ')}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  ) : null;
};

export default Bookshelf;
