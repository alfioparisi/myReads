import React from 'react';
import NavBar from './components/NavBar';
import SearchPage from './components/SearchPage';
import BookList from './components/BookList';
import { Route } from 'react-router-dom';
import './App.css';

/**
  Render either the search page or the book list off the current URL.
  @return {object} : 'SearchPage' || 'BookList'
*/
const BooksApp = () => (
  <div className="app">
    <NavBar />
    <Route exact path='/' component={BookList} />
    <Route path='/search' component={SearchPage} />
  </div>
);

export default BooksApp
