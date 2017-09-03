import React from 'react';
import PropTypes from 'prop-types';

/**
  Render the input for the search and the book list matching the search. Also a
  button to go back to the main page.
  @param {function} : call for 'BooksApp' state change
  @return {object} : the search page
*/
const SearchPage = ({ onClick }) => (
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
        <input type="text" placeholder="Search by title or author"/>

      </div>
    </div>
    <main className="search-books-results">
      <ol className="books-grid"></ol>
    </main>
  </div>
);

SearchPage.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default SearchPage;
