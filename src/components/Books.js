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
    this.handleChange = this.handleChange.bind(this);
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
    Update the reading status of a specific book. Then update this.state.
    @param {string} : the book id
    @param {string} : the new status
  */
  handleChange(id, shelf) {
    BooksAPI.update(id, shelf);
    BooksAPI.get(id).then(book => {
      if (book.shelf === 'none') this.setState(prevState => ({
        books: prevState.books.filter(b => b.id !== id)
      }));
      else this.setState(prevState => ({
        books: [...prevState.books.filter(b => b.id !== id), book]
      }))
    });
  }

  /**
    Pass to each 'Bookshelf' a different part of this.state.books based off the
    current status (shelf property) of each book.
  */
  render() {
    const { books } = this.state;
    return books && books.length ? (
      <main className="list-books-content">
        <div>
          <Bookshelf title='Currently Reading'
            books={books.filter(({ shelf }) => shelf === 'currentlyReading')}
            onChange={this.handleChange}
          />
          <Bookshelf title='Want to Read'
            books={books.filter(({ shelf }) => shelf === 'wantToRead')}
            onChange={this.handleChange}
          />
          <Bookshelf title='Read'
            books={books.filter(({ shelf }) => shelf === 'read')}
            onChange={this.handleChange}
          />
        </div>
      </main>
    ) : <div>Loading...</div>;
  }
}

export default Books;
