import React from 'react';
import './App.scss';
import nanoid from 'nanoid';

import Form from './Components/Form';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.positionsList = [
      {position: '', status: false},
      {position: 'junior developer', status: false},
      {position: 'middle developer', status: true},
      {position: 'senior developer', status: true},
      {position: 'full-stack developer', status: true},
      {position: 'designer', status: false},
      {position: 'business analyst', status: true},
      {position: 'project manager', status: true},
      {position: 'quality assurance engineer', status: true}
    ];

    this.state = {
      persons: [],
      editPerson: null
    };

    this.deletePer = function(idx){
      return () => this.deletePerson(idx);
    }.bind(this);
    this.edit = function (id) {
      return () => this.editPerson(id);
    }.bind(this);
    this.addPerson = this.addPerson.bind(this);
  }

  addPerson (pers) {
    if (pers.id) {
    //  save existing
      this.setState(state => {
        const persons = [...state.persons].map((savedPers) => {
          if (savedPers.id === pers.id) {
            return pers;
          }
          return savedPers;
        });
        return {
          ...state,
          editPerson: null,
          persons,
        }
      })
    } else {
      // add new
      this.setState(state => ({
        ...state,
        editPerson: null,
        persons: [
          ...(state.persons || []),
          {
            ...pers,
            id: nanoid(),
          },
        ]
      }));
    }
  }

  deletePerson (idx) {
    this.setState(state => {
      const persons = [...state.persons];
      persons.splice(idx, 1);
      return {
        ...state,
        persons
      }
    })
  }

  editPerson (id) {
    const editPerson = this.state.persons.find((editItem) => editItem.id === id);
    this.setState(state => ({
      ...state,
      editPerson,
    }));
  }

  render () {
    return (
      <div className="App container">
        <div className="wrapper">
          <h1>employee editor</h1>
          <Form
            options={this.positionsList}
            personData={this.state.editPerson}
            addPerson={this.addPerson}
          />
          <div className="list">
            <div className="row worker worker-header">
              <div className="col-4 name">name</div>
              <div className="col-3 position">position</div>
              <div className="col-2 contractor">contractor</div>
              <div className="col-3 edit">edit</div>
            </div>
            {this.state.persons.map((elem, idx)=> {
              return (
                <div key={idx} className="row worker">
                  <div className="col-4 name">{elem.name}</div>
                  <div className="col-3 position">{elem.position}</div>
                  <div className="col-2 contractor">{elem.statusChecked ? '\u2714' : '\u2718'}</div>
                  <div className="col-3 edit">
                    <button
                      type="button"
                      className="btn btn-outline-success"
                      onClick={this.edit(elem.id)}>
                      edit
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-success"
                      disabled={!!this.state.editPerson && elem.id === this.state.editPerson.id}
                      onClick={this.deletePer(idx)}>
                      remove
                    </button>
                  </div>
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
