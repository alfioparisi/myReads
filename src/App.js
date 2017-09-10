import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import { Route } from 'react-router-dom';
import SearchPage from './components/SearchPage';
import BookList from './components/BookList';
import './App.css';

/**
  Render either the search page or the book list off the current URL.
  @return {object} : 'SearchPage' || 'BookList'
*/
class BooksApp extends Component {
  /**
    The state will decide whether to show the navigation bar or not.
  */
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showNavBar: false
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  /*
    localStorage code from https://developer.mozilla.org/en-US/docs/Web/API/Storage/LocalStorage
  */

  /**
    Fetch the books from the server.
    If the localStorage is not defined, build one.
    @return {object} : localStorage
  */
  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({ books }));

    if (!window.localStorage) {
      Object.defineProperty(window, "localStorage", new (function () {
        var aKeys = [], oStorage = {};
        Object.defineProperty(oStorage, "getItem", {
          value: function (sKey) { return sKey ? this[sKey] : null; },
          writable: false,
          configurable: false,
          enumerable: false
        });
        Object.defineProperty(oStorage, "key", {
          value: function (nKeyId) { return aKeys[nKeyId]; },
          writable: false,
          configurable: false,
          enumerable: false
        });
        Object.defineProperty(oStorage, "setItem", {
          value: function (sKey, sValue) {
            if(!sKey) { return; }
            document.cookie = escape(sKey) + "=" + escape(sValue) + "; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/";
          },
          writable: false,
          configurable: false,
          enumerable: false
        });
        Object.defineProperty(oStorage, "length", {
          get: function () { return aKeys.length; },
          configurable: false,
          enumerable: false
        });
        Object.defineProperty(oStorage, "removeItem", {
          value: function (sKey) {
            if(!sKey) { return; }
            document.cookie = escape(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
          },
          writable: false,
          configurable: false,
          enumerable: false
        });
        Object.defineProperty(oStorage, "clear", {
          value: function () {
            if(!aKeys.length) { return; }
            for (var sKey in aKeys) {
              document.cookie = escape(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
            }
          },
          writable: false,
          configurable: false,
          enumerable: false
        });
        this.get = function () {
          var iThisIndx;
          for (var sKey in oStorage) {
            iThisIndx = aKeys.indexOf(sKey);
            if (iThisIndx === -1) { oStorage.setItem(sKey, oStorage[sKey]); }
            else { aKeys.splice(iThisIndx, 1); }
            delete oStorage[sKey];
          }
          for (aKeys; aKeys.length > 0; aKeys.splice(0, 1)) { oStorage.removeItem(aKeys[0]); }
          for (var aCouple, iKey, nIdx = 0, aCouples = document.cookie.split(/\s*;\s*/); nIdx < aCouples.length; nIdx++) {
            aCouple = aCouples[nIdx].split(/\s*=\s*/);
            if (aCouple.length > 1) {
              oStorage[iKey = unescape(aCouple[0])] = unescape(aCouple[1]);
              aKeys.push(iKey);
            }
          }
          return oStorage;
        };
        this.configurable = false;
        this.enumerable = true;
      })());
    }
  }

  /**
    Update the state with the new list of books provided by 'SearchPage'.
  */
  handleSearch(books) {
    this.setState({ books });
  }

  render() {
    const { books, showNavBar } = this.state;
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <BookList
            onClick={() => this.setState(prevState => ({
              showNavBar: !prevState.showNavBar
            }))}
          showNavBar={showNavBar}
          />
        )} />

        <Route path='/books' render={() => (
          <BookList
            onClick={() => this.setState(prevState => ({
              showNavBar: !prevState.showNavBar
            }))}
            showNavBar={showNavBar}
          />
        )} />

        <Route path='/search' render={() => (
          <SearchPage books={books} handleSearch={this.handleSearch} />
        )} />
      </div>
    );
  }
}

export default BooksApp
