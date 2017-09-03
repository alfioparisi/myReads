import React from 'react'
import SearchPage from './components/SearchPage';
import BookList from './components/BookList';
// import * as BooksAPI from './BooksAPI'
import './App.css'

/**
  Render either the search page or the book list off its own state.
  @return {object} : 'SearchPage' || 'BookList'
*/
class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchPage
            onClick={() => this.setState({ showSearchPage: false })}
          />
        ) : (
          <BookList
            onClick={() => this.setState({ showSearchPage: true })}
          />
        )}
      </div>
    )
  }
}

export default BooksApp
