import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './App';
import * as serviceWorker from './serviceWorker';

const defaultOptions = [
  {
    initial: 0,
    step: 10,
    range: {
      min: -10,
      max: 20
    }
  },
  {
    initial: 0,
    step: 1,
    range: {
      min: -10,
      max: 10
    }
  },
  {
    initial: 0,
    step: 5,
    range: {
      min: -100,
      max: 50
    }
  }
];

const handleChange = (val) => {

};

ReactDOM.render(
  <div>
    <ul>
      {defaultOptions.map((options, idx) => <li key={idx}><Counter options={options} onChange={(val) => this.handleChange(val)}/></li>) }
    </ul>
    <div>Sum: {this.state.overalSum}</div>
  </div>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
