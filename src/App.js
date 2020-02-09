import React from 'react';

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

  handleClick ({currentTarget}) {
    const {step, range: {min, max}} = this.props.options;
    const operation = currentTarget.getAttribute('data-operation');
    let newCount = this.state.count;
    if (operation === 'incr') {
      newCount = newCount + step;
    } else {
      newCount = newCount - step;
    }

    if (this.isNumValid(newCount)) {
      this.setState({
        count: newCount
      });
    } else {
      this.setState({
        count: operation === 'incr' ? max : min
      });
    }
    this.props.onChange(this.state.count);
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

export default Counter;