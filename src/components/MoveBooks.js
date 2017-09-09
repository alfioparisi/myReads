import React, { Component } from 'react';
import PropTypes from 'prop-types';
import serializeForm from 'form-serialize';

/**
  Change the reading status of a bunch of books at once.
  @param {array} : the books array
  @param {function} : modify the books state of Books
  @return {object} : list showing all the books and an option to move them
*/
class MoveBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    handleForm: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      moveTo: 'currentlyReading'
    }
  }

  render() {
    const { moveTo } = this.state;
    const { books, handleForm } = this.props;
    return (
      <form
        className="move-form"
        onSubmit={evt => {
          evt.preventDefault();
          const values = serializeForm(evt.target, {hash: true});
          handleForm(values);
          window.alert(`Books moved to ${values['moveTo']}`)
        }}
      >
        <label className="move-form-input">Move books to : 
          <select name="moveTo" value={moveTo}
            onChange={evt => this.setState({moveTo: evt.target.value})}
          >
            <option value="currentlyReading">Reading now</option>
            <option value="wantToRead">Want to read</option>
            <option value="read">Already read</option>
            <option value="none">Remove from list</option>
          </select>
        </label>
        {books.map(({ id, shelf, title }) => (
          <label key={id}
            className="move-form-input"
          >
            <input name={id} type="checkbox" value={shelf} />
            {title}
          </label>
        ))}
        <input type="submit" value="Move" className="move-form-submit" />
      </form>
    );
  }
}

export default MoveBooks;
