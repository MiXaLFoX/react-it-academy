import React from 'react';
import './App.scss';
import Form from './Components/Form';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      persons: []
    };

    this.deletePer = function(idx){
      return () => this.deletePerson(idx);
    }.bind(this);

    this.addPerson = this.addPerson.bind(this);
  }

  addPerson (p) {
    this.setState((state) => ({
      persons: [
        ...(state.persons || []),
        p,
      ]
    }));
  }

  deletePerson (idx) {
    this.setState(state => {
      const persons = [...state.persons];
      persons.splice(idx, 1);
      return {
        persons
      }
    })
  }

  render () {
    return (
      <div className="App container">
        <div className="wrapper">
          <h1>list</h1>
          <Form options={['', 'junior developer', 'middle developer', 'senior developer', 'full-stack developer']} addPerson={this.addPerson}/>
          <div className="list">
            {this.state.persons.map((elem, idx)=> {
              return (
                <div key={idx} className="row worker" onClick={this.deletePer(idx)}>
                  <div className="col-6">{elem.name}</div>
                  <div className="col-4">{elem.position}</div>
                  <div className="col-2">{elem.statusChecked ? '\u2714' : '\u2718'}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
