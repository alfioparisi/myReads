import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/**
  Render each book.
  @param {string} : the book id
  @param {string} : URL of the thumbnail image
  @param {string} : title of the book
  @param {array} : name of the authors
  @param {function} : trigger the reading status change of this book
  @return {object} : a book
*/
const Book = ({ id, coverURL, title, authors, shelf, onChange }) => (
  <article className="book">
    <div className="book-top">
      <Link to={`/books/bookInfo/${id}`} className="book-cover"
        style={{ width: 128, height: 193, backgroundImage: `url(${coverURL})` }}
      ></Link>
      <div className="book-shelf-changer">
        <select value={shelf || 'none'}
          onChange={evt => onChange(id, evt.target.value)}
        >
          <option value="none" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    </div>
    <div className="book-title">{title}</div>
    <div className="book-authors">{authors.join(', ')}</div>
  </article>
);

Book.propTypes = {
  id: PropTypes.string.isRequired,
  coverURL: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  authors: PropTypes.array.isRequired,
  shelf: PropTypes.string,
  onChange: PropTypes.func
};

export default Book;
