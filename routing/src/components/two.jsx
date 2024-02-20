import React,{useContext} from 'react'
import { AppContext } from '../appcontext'
function Two() {
  let {data}=useContext(AppContext)
  console.log(data);
  return (
    <div style={{width:"80%",backgroundColor:"violet",color :"white"}}>
      <h1>it is from {data}</h1>
    </div>
  )
}

export default Two
