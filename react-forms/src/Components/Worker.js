import React from 'react';

function Worker (props) {
  const {persons} = props.persons;
  
  return (
    <div className="list">
      {persons.map((elem)=> {
        return (
          <div key={props.id} className="row worker" onClick={props.deletePerson}>
            <div className="col-6">{elem.name}</div>
            <div className="col-4">{elem.position}</div>
            <div className="col-2">{elem.statusChecked ? '\u2714' : '\u2718'}</div>
          </div>
        )
      })}
    </div>
  )
}

export default Worker;