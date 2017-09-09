import React, { Component } from 'react';
import NavBar from './components/NavBar';
import SearchPage from './components/SearchPage';
import BookList from './components/BookList';
import { Route } from 'react-router-dom';
import './App.css';

/**
  Render either the search page or the book list off the current URL.
  @return {object} : 'SearchPage' || 'BookList'
*/
class BooksApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNavBar: false
    };
  }
  
  render() {
    const { showNavBar } = this.state;
    return (
      <div className="app">
        <NavBar isOnScreen={showNavBar}
          onClick={() => this.setState({showNavBar: false})}
        />
        <Route exact path='/' render={() => (
          <BookList onClick={() => this.setState(prevState => ({
            showNavBar: !prevState.showNavBar
          }))} />
        )} />
        <Route path='/books' render={() => (
          <BookList onClick={() => this.setState(prevState => ({
            showNavBar: !prevState.showNavBar
          }))} />
        )} />
        <Route path='/search' component={SearchPage} />
      </div>
    );
  }
}

export default BooksApp
