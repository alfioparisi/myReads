import React, { Component } from 'react';
import { get } from '../BooksAPI';
import Rating from './Rating';


/**
  Render the info for a specific book.
  The state holds the book, which is retrieved from the server, and the rating.
  The rating is saved in the localStorage to persist page navigation.
  @return {object} : book info
*/
class BookInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: {},
      rating: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  /**
    The location prop is provided by react-router. Use it to get the book from
    the server. Then update the state.
  */
  componentDidMount() {
    const { location } = this.props;
    const id = location.pathname.slice(location.pathname.lastIndexOf('/') + 1);
    get(id).then(book => this.setState({
      book,
      rating: localStorage.getItem(book.id) || 0
    }));
  }

 /**
  Update the rating on the localStorage. Then update the state.
  @param {number} : the rating
 */
  handleClick(n) {
    localStorage.removeItem(this.state.book.id);
    localStorage.setItem(this.state.book.id, n);
    this.setState({
      rating: n
    });
  }

  render() {
    const { book, rating } = this.state;
    return book.title ? (
      <section>
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
        <Rating onClick={this.handleClick} rating={rating} />
      </section>
    ) : null;
  }
}

export default BookInfo;
