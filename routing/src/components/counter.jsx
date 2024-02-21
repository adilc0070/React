import React, { useContext, useState } from 'react'
import { Context } from './sampleContext'

function Counter() {
    let [count,setCount]=useState(0)
    let {st}=useContext(Context)
  return (
    <div>
      <h2>{count}</h2>

      <button onClick={()=>{
        setCount(count=>count+1)
        setCount(count=>count+1)
        setCount(count=>count+1)
        setCount(count=>count+1)
    }}>increment</button>
    {st}
    </div>
  )
}

export default Counter
