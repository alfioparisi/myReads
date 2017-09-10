import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import Bookshelf from './Bookshelf';
import BookInfo from './BookInfo';
import MoveBooks from './MoveBooks';

/**
  Render each bookshelf.
  The 'books' property is an array given by the BooksAPI.getAll()
  method.
  @param {array} : the list of books stored in the shelves
  @param {function} : change the books state of 'BooksApp'
  @return {object} : 'Bookshelf' || 'BookInfo'
*/
class Books extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    handleBook: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.newBookList = [];
    this.handleChange = this.handleChange.bind(this);
    this.handleForm = this.handleForm.bind(this);
  }

  /**
    Update the reading status of a specific book. Then update this.state.
    @param {string} : the book id
    @param {string} : the new status
  */
  handleChange(id, shelf) {
    const { books, handleBook } = this.props;
    BooksAPI.update(id, shelf);
    BooksAPI.get(id).then(book => {
      if (book.shelf === 'none') this.newBookList = books.filter(b => b.id !== id);
      else this.newBookList = [...books.filter(b => b.id !== id), book];
      handleBook(this.newBookList);
    });
  }

  /**
    Change the reading status of a bulk of books.
    @param {object} : form values
  */
  handleForm(values) {
    const { books, handleBook } = this.props;
    for (const book of books) {
      if (values[book.id]) BooksAPI.update(book.id, values['moveTo'])
        .catch(err => console.log(err));
    }
    BooksAPI.getAll()
      .then(books => handleBook(books))
      .catch(err => console.log(err));
  }

  /**
    Pass to each 'Bookshelf' a different part of this.state.books based off the
    current status (shelf property) of each book.
  */
  render() {
    const { books } = this.props;
    return books && books.length ? (
      <main className="list-books-content">
        <Route exact path="/"
          render={() => (
            <Bookshelf title='Currently Reading'
              books={books.filter(({ shelf }) => shelf === 'currentlyReading')}
              onChange={this.handleChange}
            />
          )}
        />

        <Route exact path="/books/currentlyReading"
          render={() => (
            <Bookshelf title='Currently Reading'
              books={books.filter(({ shelf }) => shelf === 'currentlyReading')}
              onChange={this.handleChange}
            />
          )}
        />

        <Route exact path="/books/wantToRead"
          render={() => (
            <Bookshelf title='Want to Read'
              books={books.filter(({ shelf }) => shelf === 'wantToRead')}
              onChange={this.handleChange}
            />
          )}
        />

        <Route exact path="/books/read"
          render={() => (
            <Bookshelf title='Read'
              books={books.filter(({ shelf }) => shelf === 'read')}
              onChange={this.handleChange}
            />
          )}
        />

        <Route path='/books/bookInfo' component={BookInfo} />

        <Route path='/books/moveBooks' render={() => (
          <MoveBooks books={books} handleForm={this.handleForm} />
        )} />
      </main>
    ) : <div>Loading...</div>;
  }
}

export default Books;
