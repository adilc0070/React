import {useState} from 'react'
import Counter from './componants/counter.jsx'
function App(){
  const [count,setCount]=useState(0)

  const AddCount=(val)=>{ setCount((count)=> count + val) }
  let obj={
    title:'3rd Counter',
    count
  } 
  return(
    <div className='App'>
      <button onClick={() => AddCount(-1)} style={{fontSize:"30px",marginLeft:'10px'}} >MinuseOne</button>
      <button onClick={() => AddCount(1)} style={{fontSize:"30px",marginLeft:'10px'}} >AddOne</button>
      <button onClick={() => AddCount(-count)} style={{fontSize:"30px",marginLeft:'10px'}} >Reset</button>
      <Counter title='1st Counter' count={count}/>
      <Counter title='2nd Counter' count={count}/>
      <Counter {...obj}/>
    </div>
  )
}


export default App;