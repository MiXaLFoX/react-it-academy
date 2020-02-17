import React from 'react';
import './App.scss';
import Worker from './Components/Worker';
import Form from './Components/Form';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      persons: []
    };

    this.addPerson = this.addPerson.bind(this);
  }

  addPerson (p) {
    this.setState(state => {
      state.persons.push(p);
      return {
        persons: state.persons
      };
    });
  }

  render () {
    return (
      <div className="App container">
        <div className="wrapper">
          <h1>list</h1>
          <Form options={['junior', 'middle', 'senior']} addPerson={this.addPerson}/>
          <Worker persons={this.state}/>
        </div>
      </div>
    )
  }
}

export default App;
