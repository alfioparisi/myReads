import React, { Component } from 'react';
import PropTypes from 'prop-types';

/*
  rating code from https://codepen.io/dstockbridge/pen/kkRrxK
*/

/**
  Render the 5 stars representing the rating.
  @param {function} : update the rating state of BookInfo
  @param {string} : the rating
  @return {object} : 5 stars for the rating
*/
class Rating extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    rating: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
  }

  /**
    Store the rating in the state so that when it changes it triggers re-rendering.
  */
  constructor(props) {
    super(props);
    this.state = {
      rating: this.props.rating
    }
  }

  render() {
    const { onClick } = this.props;
    const { rating } = this.state;
    return (
      <article className="rating">
        <div className="rating-container">
          <input id="star-5" className="radio" name="star" type="radio"
            defaultChecked={rating === '5'}
          />
          <div className="star">
            <svg viewBox="0 0 20 20"><path d="M0 0v20h20V0H0zM16.2 19.5L10 16.3l-6.2 3.2 1.2-6.9L0 7.8l6.9-1L10 0.5l3.1 6.3 6.9 1 -5 4.9L16.2 19.5z"/></svg>
            <label htmlFor="star-5" onClick={() => onClick(5)}>
              <svg viewBox="0 0 20 20"><path d="M20 0v20H0V0H20M21-1h-1H0h-1v1 20 1h1 20 1v-1V0 -1L21-1zM2.2 8.5l4.9-0.7 0.5-0.1 0.2-0.5L10 2.8l2.2 4.4 0.2 0.5 0.5 0.1 4.9 0.7 -3.5 3.5 -0.4 0.4 0.1 0.5 0.8 4.9 -4.4-2.3L10 15.1l-0.5 0.2L5.2 17.7l0.8-4.9 0.1-0.5L5.7 11.9 2.2 8.5 2.2 8.5z"/></svg>
            </label>
          </div>
          <input id="star-4" className="radio" name="star" type="radio"
            defaultChecked={rating === '4'}
          />
          <div className="star">
            <svg viewBox="0 0 20 20"><path d="M0 0v20h20V0H0zM16.2 19.5L10 16.3l-6.2 3.2 1.2-6.9L0 7.8l6.9-1L10 0.5l3.1 6.3 6.9 1 -5 4.9L16.2 19.5z"/></svg>
            <label htmlFor="star-4" onClick={() => onClick(4)}>
              <svg viewBox="0 0 20 20"><path d="M20 0v20H0V0H20M21-1h-1H0h-1v1 20 1h1 20 1v-1V0 -1L21-1zM2.2 8.5l4.9-0.7 0.5-0.1 0.2-0.5L10 2.8l2.2 4.4 0.2 0.5 0.5 0.1 4.9 0.7 -3.5 3.5 -0.4 0.4 0.1 0.5 0.8 4.9 -4.4-2.3L10 15.1l-0.5 0.2L5.2 17.7l0.8-4.9 0.1-0.5L5.7 11.9 2.2 8.5 2.2 8.5z"/></svg>
            </label>
          </div>
          <input id="star-3" className="radio" name="star" type="radio"
            defaultChecked={rating === '3'}
          />
          <div className="star">
            <svg viewBox="0 0 20 20"><path d="M0 0v20h20V0H0zM16.2 19.5L10 16.3l-6.2 3.2 1.2-6.9L0 7.8l6.9-1L10 0.5l3.1 6.3 6.9 1 -5 4.9L16.2 19.5z"/></svg>
            <label htmlFor="star-3" onClick={() => onClick(3)}>
              <svg viewBox="0 0 20 20"><path d="M20 0v20H0V0H20M21-1h-1H0h-1v1 20 1h1 20 1v-1V0 -1L21-1zM2.2 8.5l4.9-0.7 0.5-0.1 0.2-0.5L10 2.8l2.2 4.4 0.2 0.5 0.5 0.1 4.9 0.7 -3.5 3.5 -0.4 0.4 0.1 0.5 0.8 4.9 -4.4-2.3L10 15.1l-0.5 0.2L5.2 17.7l0.8-4.9 0.1-0.5L5.7 11.9 2.2 8.5 2.2 8.5z"/></svg>
            </label>
          </div>
          <input id="star-2" className="radio" name="star" type="radio"
            defaultChecked={rating === '2'}
          />
          <div className="star">
            <svg viewBox="0 0 20 20"><path d="M0 0v20h20V0H0zM16.2 19.5L10 16.3l-6.2 3.2 1.2-6.9L0 7.8l6.9-1L10 0.5l3.1 6.3 6.9 1 -5 4.9L16.2 19.5z"/></svg>
            <label htmlFor="star-2" onClick={() => onClick(2)}>
              <svg viewBox="0 0 20 20"><path d="M20 0v20H0V0H20M21-1h-1H0h-1v1 20 1h1 20 1v-1V0 -1L21-1zM2.2 8.5l4.9-0.7 0.5-0.1 0.2-0.5L10 2.8l2.2 4.4 0.2 0.5 0.5 0.1 4.9 0.7 -3.5 3.5 -0.4 0.4 0.1 0.5 0.8 4.9 -4.4-2.3L10 15.1l-0.5 0.2L5.2 17.7l0.8-4.9 0.1-0.5L5.7 11.9 2.2 8.5 2.2 8.5z"/></svg>
            </label>
          </div>
          <input id="star-1" className="radio" name="star" type="radio"
            defaultChecked={rating === '1'}
          />
          <div className="star">
            <svg viewBox="0 0 20 20"><path d="M0 0v20h20V0H0zM16.2 19.5L10 16.3l-6.2 3.2 1.2-6.9L0 7.8l6.9-1L10 0.5l3.1 6.3 6.9 1 -5 4.9L16.2 19.5z"/></svg>
            <label htmlFor="star-1" onClick={() => onClick(1)}>
              <svg viewBox="0 0 20 20"><path d="M20 0v20H0V0H20M21-1h-1H0h-1v1 20 1h1 20 1v-1V0 -1L21-1zM2.2 8.5l4.9-0.7 0.5-0.1 0.2-0.5L10 2.8l2.2 4.4 0.2 0.5 0.5 0.1 4.9 0.7 -3.5 3.5 -0.4 0.4 0.1 0.5 0.8 4.9 -4.4-2.3L10 15.1l-0.5 0.2L5.2 17.7l0.8-4.9 0.1-0.5L5.7 11.9 2.2 8.5 2.2 8.5z"/></svg>
            </label>
          </div>
        </div>
      </article>
    );
  }
}

export default Rating;
