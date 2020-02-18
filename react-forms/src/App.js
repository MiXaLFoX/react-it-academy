import React from 'react';
import './App.scss';
import Worker from './Components/Worker';
import Form from './Components/Form';
import nanoid from 'nanoid';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.id = nanoid();

    this.state = {
      persons: []
    };

    this.addPerson = this.addPerson.bind(this);
    this.deletePerson = this.deletePerson.bind(this);
  }

  addPerson (p) {
    this.setState(state => {
      state.persons.push(p);
      console.log(this.state);
      return {
        ...state.persons
      };
    });
  }

  deletePerson (idx) {
    console.log(idx);
    this.setState(state => {
      state.persons.splice(idx, 1);
      console.log(this.state);
      return {
        ...state.persons
      }
    })
  }

  render () {
    return (
      <div className="App container">
        <div className="wrapper">
          <h1>list</h1>
          <Form options={['', 'junior', 'middle', 'senior']} addPerson={this.addPerson}/>
          <Worker id={this.id} persons={this.state} deletePerson={this.deletePerson}/>
        </div>
      </div>
    )
  }
}

export default App;
