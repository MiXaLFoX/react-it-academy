import React from 'react';

class Counter extends React.Component {
  constructor (props) {
    super (props);
    this.incr = props.data.increment || 1;
    this.decr = props.data.decrement || 1;
    this.max = props.data.maxRange || 100;
    this.min = props.data.minRange || -100;
    this.state = {
      count: 0
    };
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleIncrement () {
    this.setState({
      count: this.state.count + this.incr
    });
    if (this.state.count >= this.max) {
      this.setState({
        count: this.state.count
      })
    }
  }

  handleDecrement () {
    this.setState({
      count: this.state.count - this.decr
    });
    if (this.state.count <= this.min) {
      this.setState({
        count: this.state.count
      })
    }
    console.log(this.props.increment);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleIncrement}> + </button>
        <span> {this.state.count} </span>
        <button onClick={this.handleDecrement}> - </button>
      </div>
    );
  }
}

export default Counter;
