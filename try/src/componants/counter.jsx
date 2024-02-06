import React from 'react'

function counter({title,...obj}) {

    
  return (
    <div>
      <h1>{title} : {obj.count}</h1>
    </div>
  )
}

export default counter
