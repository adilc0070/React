import React from 'react'
import Two from './two'

function One({lt}) {
  return (
    <div style={{width:"200px",color:'greenyellow', backgroundColor:"red"}}>
      <h1>leyer </h1>
      <Two val={lt} />
    </div>
  )
}

export default One
