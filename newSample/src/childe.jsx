import React, { useContext } from 'react'
import { SampleContext } from './contest'

function Childe() {
let {coun} =useContext(SampleContext)
  return (
    <div>
      <h2>i from child {coun}</h2>
    </div>
  )
}

export default Childe
