import React from 'react'
import './Ninjas.css'

const Ninjas = ({ ninjas, deleteNinja }) => {
  return (
    <div className="ninja-List">
      {
        ninjas.map(n => {
          return n.age > 17 ? (
            <div className="ninja" key={n.id}>
              <div>
                This is Ninjas
                </div>
              <div>Name: {n.name}</div>
              <div>Age: {n.age}</div>
              <div>Type: {n.type}</div>
              <button onClick={() => deleteNinja(n.id)}>Delete</button>
            </div>
          ) : null;
        })
      }
    </div>
  )
}

export default Ninjas;