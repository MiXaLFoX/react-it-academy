import React from 'react';

class Counter extends React.Component {
  constructor (props) {
    super (props);
    this.incr = props.data.increment || 1;
    this.decr = props.data.decrement || 1;
    this.max = props.data.maxRange || 10;
    this.min = props.data.minRange || -10;
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
  }

  render() {
    return (
      <div>
        <button onClick={this.handleIncrement} onClick={() => { this.props.updateData(this.state.sum)}}> + </button>
        <span> {this.state.count} </span>
        <button onClick={this.handleDecrement}> - </button>
      </div>
    );
  }
}

class SuperCount extends React.Component {
  state = {
    sum: 0
  };

  updateData = (value) => {
    this.setState({ sum: value })
  };

  render() {
    return (
    <div>
      <p>counters sum: {this.state}</p>
      <Counter updateData={this.updateData} data={{increment: 10, decrement: 10, maxRange: 100, minRange: -100}}/>
      <Counter updateData={this.updateData} data={{}}/>
    </div>
    )
  }
}

export default SuperCount;