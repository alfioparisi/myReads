import React from 'react';

/**
  Render each book.
  @param {string} : the book id
  @param {string} : URL of the thumbnail image
  @param {string} : title of the book
  @param {string} : name of the authors
  @param {function} : trigger the reading status change of this book
  @return {object} : a book
*/
const Book = ({ id, coverURL, title, authors, shelf, onChange }) => (
  <div className="book">
    <div className="book-top">
      <div className="book-cover"
        style={{ width: 128, height: 193, backgroundImage: `url(${coverURL})` }}
      ></div>
      <div className="book-shelf-changer">
        <select value={shelf}
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
    <div className="book-authors">{authors}</div>
  </div>
);

export default Book;
