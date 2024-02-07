import { useState } from 'react'
import MapObject from './components/MapObject.jsx'

function App() {
  let users=[{name:'Adil',age:20},{name:'Abi',age:23},{name:'NK',age:21}]
  const [count, setCount] = useState(0)
  function hellow(num){
    console.log(count);
    setCount(count=>count+num)
  }
  return (
    <d>
      <button onClick={()=>hellow(1)}>good</button>
      <button onClick={()=>hellow(-1)}>sad</button>
      <button onClick={()=>hellow(-count)}>Back to motion</button>
      {
        
        users.map((val,index)=>
            <MapObject key={index} {...val} />
         )
      }
    </d>
  )
}

export default App
