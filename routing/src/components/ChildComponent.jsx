import React from 'react'

function ChildComponent({onData}) {
  let handleClick=()=>{
    const data='qweqweqweqw'
    onData(data)
  }
  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={handleClick}>Send Data to Parant</button>
    </div>
  )
}

export default ChildComponent
