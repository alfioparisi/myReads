import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Book from './Book';
import * as BooksAPI from '../BooksAPI';

/**
  Render the input for the search and the book list matching the search. Also a
  button to go back to the main page.
  @param {array} : the list of books stored in the shelves
  @param {function} : change the books state of 'BooksApp'
  @return {object} : the search page
*/
class SearchPage extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    handleSearch: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      searchedBooks: []
    };
    this.newBookList = [];
    this.handleChange = this.handleChange.bind(this);
  }

  /**
    When the reading status (shelf) of a book changes, update both the server,
    this.state and the books state of 'BooksApp'.
    @param {string} : the book id
    @param {string} : the current reading status
  */
  handleChange(id, shelf) {
    const { handleSearch } = this.props;
    handleSearch(id, shelf);
    this.setState(prevState => ({
      searchedBooks: prevState.searchedBooks.filter(book => book.id !== id)
    }));
  }

  render() {
    const { books } = this.props;
    const { searchedBooks } = this.state;
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
                    .then(searchedBooks => {
                      for (const book of searchedBooks) {
                        books.forEach(({ id, shelf }) => {
                          if (book.id === id) book.shelf = shelf;
                        });
                      }
                      this.setState({ searchedBooks });
                    })
                    .catch(err => console.log(err));
                }
              }}
            />
          </div>
        </div>
        <main className="search-books-results">
          <ol className="books-grid">
            {searchedBooks.length ? searchedBooks.map(({ id, imageLinks, title, authors, shelf }) => (
              <li key={id}>
                <Book
                  id={id}
                  coverURL={imageLinks.thumbnail}
                  title={title}
                  authors={authors}
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
