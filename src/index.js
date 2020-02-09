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
      max: 20
    }
  }
];

const handleChange = (val, idx) => {

}

ReactDOM.render(
  <div>
    {defaultOptions.map((options, idx) => <Counter key={idx} options={options} onChange={(val) => this.handleChange(val, idx)} />)}
    <div>Sum: {this.state.overalSum}</div>
  </div>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
