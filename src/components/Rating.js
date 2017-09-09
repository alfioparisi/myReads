import React from 'react';

/*
  rating code from https://codepen.io/dstockbridge/pen/kkRrxK
*/

const Rating = ({ onClick }) => (
  <div className="rating">
    <div className="rating-container">
      <input id="star-5" className="radio" name="star" type="radio" />
      <div className="star">
        <svg viewBox="0 0 20 20"><path d="M0 0v20h20V0H0zM16.2 19.5L10 16.3l-6.2 3.2 1.2-6.9L0 7.8l6.9-1L10 0.5l3.1 6.3 6.9 1 -5 4.9L16.2 19.5z"/></svg>
        <label htmlFor="star-5" onClick={() => onClick(5)}>
          <svg viewBox="0 0 20 20"><path d="M20 0v20H0V0H20M21-1h-1H0h-1v1 20 1h1 20 1v-1V0 -1L21-1zM2.2 8.5l4.9-0.7 0.5-0.1 0.2-0.5L10 2.8l2.2 4.4 0.2 0.5 0.5 0.1 4.9 0.7 -3.5 3.5 -0.4 0.4 0.1 0.5 0.8 4.9 -4.4-2.3L10 15.1l-0.5 0.2L5.2 17.7l0.8-4.9 0.1-0.5L5.7 11.9 2.2 8.5 2.2 8.5z"/></svg>
        </label>
      </div>
      <input id="star-4" className="radio" name="star" type="radio" />
      <div className="star">
        <svg viewBox="0 0 20 20"><path d="M0 0v20h20V0H0zM16.2 19.5L10 16.3l-6.2 3.2 1.2-6.9L0 7.8l6.9-1L10 0.5l3.1 6.3 6.9 1 -5 4.9L16.2 19.5z"/></svg>
        <label htmlFor="star-4" onClick={() => onClick(4)}>
          <svg viewBox="0 0 20 20"><path d="M20 0v20H0V0H20M21-1h-1H0h-1v1 20 1h1 20 1v-1V0 -1L21-1zM2.2 8.5l4.9-0.7 0.5-0.1 0.2-0.5L10 2.8l2.2 4.4 0.2 0.5 0.5 0.1 4.9 0.7 -3.5 3.5 -0.4 0.4 0.1 0.5 0.8 4.9 -4.4-2.3L10 15.1l-0.5 0.2L5.2 17.7l0.8-4.9 0.1-0.5L5.7 11.9 2.2 8.5 2.2 8.5z"/></svg>
        </label>
      </div>
      <input id="star-3" className="radio" name="star" type="radio" />
      <div className="star">
        <svg viewBox="0 0 20 20"><path d="M0 0v20h20V0H0zM16.2 19.5L10 16.3l-6.2 3.2 1.2-6.9L0 7.8l6.9-1L10 0.5l3.1 6.3 6.9 1 -5 4.9L16.2 19.5z"/></svg>
        <label htmlFor="star-3" onClick={() => onClick(3)}>
          <svg viewBox="0 0 20 20"><path d="M20 0v20H0V0H20M21-1h-1H0h-1v1 20 1h1 20 1v-1V0 -1L21-1zM2.2 8.5l4.9-0.7 0.5-0.1 0.2-0.5L10 2.8l2.2 4.4 0.2 0.5 0.5 0.1 4.9 0.7 -3.5 3.5 -0.4 0.4 0.1 0.5 0.8 4.9 -4.4-2.3L10 15.1l-0.5 0.2L5.2 17.7l0.8-4.9 0.1-0.5L5.7 11.9 2.2 8.5 2.2 8.5z"/></svg>
        </label>
      </div>
      <input id="star-2" className="radio" name="star" type="radio" />
      <div className="star">
        <svg viewBox="0 0 20 20"><path d="M0 0v20h20V0H0zM16.2 19.5L10 16.3l-6.2 3.2 1.2-6.9L0 7.8l6.9-1L10 0.5l3.1 6.3 6.9 1 -5 4.9L16.2 19.5z"/></svg>
        <label htmlFor="star-2" onClick={() => onClick(2)}>
          <svg viewBox="0 0 20 20"><path d="M20 0v20H0V0H20M21-1h-1H0h-1v1 20 1h1 20 1v-1V0 -1L21-1zM2.2 8.5l4.9-0.7 0.5-0.1 0.2-0.5L10 2.8l2.2 4.4 0.2 0.5 0.5 0.1 4.9 0.7 -3.5 3.5 -0.4 0.4 0.1 0.5 0.8 4.9 -4.4-2.3L10 15.1l-0.5 0.2L5.2 17.7l0.8-4.9 0.1-0.5L5.7 11.9 2.2 8.5 2.2 8.5z"/></svg>
        </label>
      </div>
      <input id="star-1" className="radio" name="star" type="radio" />
      <div className="star">
        <svg viewBox="0 0 20 20"><path d="M0 0v20h20V0H0zM16.2 19.5L10 16.3l-6.2 3.2 1.2-6.9L0 7.8l6.9-1L10 0.5l3.1 6.3 6.9 1 -5 4.9L16.2 19.5z"/></svg>
        <label htmlFor="star-1" onClick={() => onClick(1)}>
          <svg viewBox="0 0 20 20"><path d="M20 0v20H0V0H20M21-1h-1H0h-1v1 20 1h1 20 1v-1V0 -1L21-1zM2.2 8.5l4.9-0.7 0.5-0.1 0.2-0.5L10 2.8l2.2 4.4 0.2 0.5 0.5 0.1 4.9 0.7 -3.5 3.5 -0.4 0.4 0.1 0.5 0.8 4.9 -4.4-2.3L10 15.1l-0.5 0.2L5.2 17.7l0.8-4.9 0.1-0.5L5.7 11.9 2.2 8.5 2.2 8.5z"/></svg>
        </label>
      </div>
    </div>
  </div>
);

export default Rating;
