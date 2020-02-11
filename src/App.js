import React from 'react';

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

class Counter extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      count: this.props.options.initial
    };
    this.handleClick = this.handleClick.bind(this);
  }

  isNumValid (num) {
    return num >= this.props.options.range.min && num <= this.props.options.range.max;
  }

  handleClick (e) {
    const {step, range: {min, max}} = this.props.options;
    const operation = e.target.getAttribute('data-operation');
    let newCount = this.state.count;
    if (operation === 'incr') {
      newCount = newCount + step;
    } else {
      newCount = newCount - step;
    }

    if (!this.isNumValid(newCount)) {
      newCount = operation === 'incr' ? max : min;
    }
    this.setState({
      count: newCount
    }, () => {
      this.props.onChange(newCount);
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick} data-operation="incr"> + </button>
        <span> {this.state.count} </span>
        <button onClick={this.handleClick} data-operation="decr"> - </button>
      </div>
    );
  }
}

class SuperCounter extends React.Component{
  constructor (props) {
    super (props);
    this.state = {
      counters: []
    }
  }

  handleChange = (val, idx) => {
    const counters = this.state.counters;
    counters[idx] = val;

    this.setState ({
      counters
    })
  };

  render() {
    return (
      <div>
        <ul>
          {defaultOptions.map((options, idx) =>
            <li key={idx}>
              <Counter options={options} onChange={(val) => this.handleChange(val, idx)}/>
            </li>) }
        </ul>
        <div>Sum: {this.state.counters.reduce((acc, c) => ((c || 0) + acc), 0)}</div>
      </div>
    )
  }
}

export default SuperCounter;
