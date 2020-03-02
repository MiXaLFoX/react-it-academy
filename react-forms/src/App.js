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

    this.edit = this.editPerson.bind(this);
    this.addPerson = this.addPerson.bind(this);
    this.deletePerson = this.deletePerson.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
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

  deletePerson (e) {
    if (e.target.getAttribute('role') === "del") {
      const idx = this.state.persons.findIndex((item) => item.id === e.target.closest('.worker').id);
      this.setState(state => {
        const persons = [...state.persons];
        persons.splice(idx, 1);
        return {
          ...state,
          persons
        }
      })
    }
  }

  editPerson (e) {
    if (e.target.getAttribute('role') === "edit") {
      const editPerson = this.state.persons.find((editItem) => editItem.id === e.target.closest('.worker').id);
      this.setState(state => ({
        ...state,
        editPerson,
      }));
    }
  }

  handleEdit (e) {
    e.target.getAttribute('role') === "edit" ? this.editPerson (e) : this.deletePerson(e);
  }

  render () {
    const tick = <span className="green">&#10004;</span>;
    const cross = <span className="red">&#10008;</span>;
    return (
      <div className="App container-fluid">
        <div className="row header">
          <div className="col">
            <h1>employee management system</h1>
          </div>
        </div>
        <div className="row wrapper">
          <Form
            options={this.positionsList}
            personData={this.state.editPerson}
            addPerson={this.addPerson}
          />
          <div className="col-1"></div>
          <div className="col-7 list" onClick={this.handleEdit}>
            <div className="row worker worker-header">
              <div className="col-4 name">name</div>
              <div className="col-3 position">position</div>
              <div className="col-2 contractor">contractor</div>
              <div className="col-3 edit">edit</div>
            </div>
            {this.state.persons.map((elem) => {
              return (
                <div id={elem.id} key={elem.id} className="row worker">
                  <div className="col-4 name">{elem.name}</div>
                  <div className="col-3 position">{elem.position}</div>
                  <div className="col-2 contractor">{elem.statusChecked ? tick : cross}</div>
                  <div className="col-3 edit">
                    <button
                      type="button"
                      className="btn btn-outline-success"
                      role="edit"
                    >
                      edit
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-success"
                      role="del"
                      disabled={!!this.state.editPerson && elem.id === this.state.editPerson.id}
                    >
                      remove
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="row footer">
          <div className="col">
            <footer>react app</footer>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
