import React, { Component } from 'react';
import Bookshelf from './Bookshelf';
import * as BooksAPI from '../BooksAPI';

/**
  Render each bookshelf.
  Has its own state object. The books property is an array given by the BooksAPI.getAll()
  method.
  @return {object} : 'Bookshelf'
*/
class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }
  /**
    Fetch all the books from the server and fill the books array.
  */
  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({
      books
    }));
  }

  /**
    Pass to each 'Bookshelf' a different part of this.state.books based off the
    current status (shelf property) of each book.
  */
  render() {
    const { books } = this.state;
    return (
      <main className="list-books-content">
        <div>
          <Bookshelf title='Currently Reading'
            books={books.filter(({ shelf }) => shelf === 'currentlyReading')}
          />
          <Bookshelf title='Want to Read'
            books={books.filter(({ shelf }) => shelf === 'wantToRead')}
          />
          <Bookshelf title='Read'
            books={books.filter(({ shelf }) => shelf === 'read')}
          />
        </div>
      </main>
    );
  }
}

export default Books;
