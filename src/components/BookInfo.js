import React, { Component } from 'react';
import Rating from './Rating';
import { get } from '../BooksAPI';

// save rating on the server

class BookInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: {}
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { location } = this.props;
    const id = location.pathname.slice(location.pathname.lastIndexOf('/') + 1);
    get(id).then(book => this.setState({ book }));
  }

  handleClick(n) {

  }

  render() {
    const { book } = this.state;
    return book.title ? (
      <div>
        <div className="book-info-container">
          <div className="book-info-book-cover"
            style={{ backgroundImage: `url(${book.imageLinks.thumbnail})` }}
          ></div>
          <ul className="book-info-list">
            <li className="book-title">{book.title}</li>
            <li className="book-authors">{book.authors}</li>
            <li>Page count: {book.pageCount}</li>
            <li>Publish date: {book.publishedDate}</li>
            <li>Publisher: {book.publisher || 'not found'}</li>
            <li><a href={book.previewLink} target="_blank">Read more info</a></li>
            <li>Current status: {book.shelf}</li>
          </ul>
        </div>
        <p className="book-info-description">
          {book.description}
        </p>
        <Rating onClick={this.handleClick} />
      </div>
    ) : null;
  }
}

export default BookInfo;
