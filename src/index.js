import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <div>
    <Counter data={{increment: 10, decrement: 10, maxRange: 100, minRange: -100}}/>
    <Counter data={{}}/>
  </div>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
