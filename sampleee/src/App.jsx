import { useState } from 'react'
import axios from 'axios'


function App() {
  let [state, setState] = useState([])
  let ClicK = () => {
    console.log(axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      console.log(response.data)
      setState(response.data)
    }));
  }
  return (
    <>
      <button onClick={() => { ClicK() }}>Show</button>
      {state.map((obj, index) => {
        return (
          <div key={obj.id}>
            <h1>{index+1}</h1>
            <h2>{obj.name},{obj.email}</h2>
          </div>
        )
      })}
    </>
  )
}

export default App
