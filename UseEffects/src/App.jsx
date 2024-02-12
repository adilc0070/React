import { useState } from 'react'
import Component from './component.jsx'

function App() {
  const [state, setState] = useState(false)

  return (
    <>
      <h2 onClick={()=>{setState(!state)}}>show</h2>
      { state && <Component/> }
    </>
  )
}

export default App
