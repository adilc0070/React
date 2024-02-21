import React, { useCallback, useState } from 'react'

function UseCallback() {
    let [stae,setStae]=useState(0)
    let handleClik=useCallback(()=>{
        setStae(stae+1)
    },[stae])
  return (
    <div>
      <h2>{stae}</h2>
      <button onClick={handleClik}>increment</button>
    </div>
  )
}

export default UseCallback
