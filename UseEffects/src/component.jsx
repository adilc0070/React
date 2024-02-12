import {useState,useEffect} from 'react'

function Component() {
  let [count,SetCount]=useState(0)
  let [count2,SetCount2]=useState(0)
  useEffect(()=>{
    console.log('Mounting...');
    console.log('Updating '+count);
    console.log('Updating '+count2);
    return ()=>{
      console.log('CleanUP');
    }
  },[count,count2])
    
  return (
    <div>
      <h1>Counter:{count}</h1>
      <button onClick={()=>SetCount((count)=>count+1)}>Add</button>
      <h1>Counter:{count2}</h1>
      <button onClick={()=>SetCount2((count)=>count+1)}>Add</button>
    </div>
  )
}

export default Component
