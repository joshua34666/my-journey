import React from 'react'

function Practii(props) {
  return (
    <div>
      <button onClick={props.clickHandler}>Increment</button>
      <h2>Hello {props.name} </h2>
    </div>
  )
}

export default Practii