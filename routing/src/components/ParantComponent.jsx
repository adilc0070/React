import React, { useState } from 'react'
import ChildComponent from './ChildComponent'
function ParantComponent() {
    let [data,setData]=useState(null)
    const handleChildeData=(dta)=>{
        setData(dta)
    }
  return (
    <div>
      <h2>Parant</h2>
      <p>data from Child:{data}</p>
      <ChildComponent onData={handleChildeData}/>
    </div>
  )
}

export default ParantComponent
