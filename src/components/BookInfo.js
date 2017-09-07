import React, { Component } from 'react';
import { get } from '../BooksAPI';

class BookInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: {}
    };
  }

  componentDidMount() {
    const { location } = this.props;
    const id = location.pathname.slice(location.pathname.lastIndexOf('/') + 1);
    get(id).then(book => this.setState({ book }));
  }

  render() {
    const { book } = this.state;
    console.log(book);
    return book.title ? (
      <div>
        <div className="book-info-container">
          <div className="book-info-book-cover"
            style={{ backgroundImage: `url(${book.imageLinks.thumbnail})` }}
          ></div>
          <div className="book-info-info">
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors}</div>
            <div>{book.publishedDate}</div>
            <div>{book.pageCount}</div>
          </div>
        </div>
      </div>
    ) : null;
  }
}

export default BookInfo;
