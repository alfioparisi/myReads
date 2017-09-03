import React, { Component } from 'react';
import Book from './Book';
import { search, update } from '../BooksAPI';
import PropTypes from 'prop-types';

/**
  Render the input for the search and the book list matching the search. Also a
  button to go back to the main page.
  @param {function} : call for 'BooksApp' state change
  @return {object} : the search page
*/
class SearchPage extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  render() {
    const { onClick } = this.props;
    const { books } = this.state;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search"
            onClick={onClick}
          >Close</a>
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
                  search(evt.target.value.trim())
                    .then(books => this.setState({books}))
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
                  onChange={(id, shelf) => update(id, shelf)}
                />
              </li>
            )) : null}
          </ol>
        </main>
      </div>
    );
  }

}

export default SearchPage;
