import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import * as BooksAPI from '../BooksAPI';

/**
  Render the input for the search and the book list matching the search. Also a
  button to go back to the main page.
  @return {object} : the search page
*/
class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
    this.storedBooks = [];
    this.handleChange = this.handleChange.bind(this);
  }

  /**
    Fetch all the books from the server and store them in a variable.
  */
  componentDidMount() {
    BooksAPI.getAll().then(books => this.storedBooks = books);
  }


  /**
    When the reading status (shelf) of a book changes, update both the server
    and this.state
    @param {string} : the book id
    @param {string} : the current reading status
  */
  handleChange(id, shelf) {
    BooksAPI.update(id, shelf);
    BooksAPI.get(id).then(book => this.setState(prevState => ({
      books: prevState.books.filter(b => b.id !== id)
    })));
  }

  render() {
    const { books } = this.state;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search"
            to="/"
          >Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input autoFocus type="text" placeholder="Search by title or author"
              onChange={evt => {
                if (evt.target.value.trim()) {
                  BooksAPI.search(evt.target.value.trim())
                    .then(books => {
                      for (const book of books) {
                        this.storedBooks.forEach(({ id, shelf }) => {
                          if (book.id === id) book.shelf = shelf;
                        });
                      }
                      this.setState({ books });
                    })
                    .catch(err => console.log(err));
                }
              }}
            />
          </div>
        </div>
        <main className="search-books-results">
          <ol className="books-grid">
            {books.length ? books.map(({ id, imageLinks, title, authors, shelf }) => (
              <li key={id}>
                <Book
                  id={id}
                  coverURL={imageLinks.thumbnail}
                  title={title}
                  authors={authors.join(', ') || ''}
                  shelf={shelf}
                  onChange={this.handleChange}
                />
              </li>
            )) : <div>No books found</div>}
          </ol>
        </main>
      </div>
    );
  }
}

export default SearchPage;
