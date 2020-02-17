import React from 'react';

function Worker (props) {
  const {persons} = props.persons;
  
  return (
    <div className="list">
      {persons.map((elem)=> {
        return (
          <div className="row worker">
            <div className="col-6">{elem.name}</div>
            <div className="col-4">{elem.position}</div>
            <div className="col-2">{elem.statusChecked ? '\u2713' : '\u2715'}</div>
          </div>
        )
      })}
    </div>
  )
}

export default Worker;