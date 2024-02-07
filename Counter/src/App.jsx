// import {useState} from 'react'
// import Counter from './componets/Counter.jsx'
// function App(){
//   const [count,setCount]=useState(0)

//   // const AddCount=(val)=>{ setCount((count)=> count + val) }
//   let obj={
//     title:'3rd Counter',
//     count
//   } 
//   let users=[{name:"adil",age:20},{name:"abin",age:30}]
//   return (
//     <div className='App'>
//       <button onClick={()=>AddCount(1)}>plus One</button>
//       <button onClick={()=>AddCount(-1)}>sub One</button>

//     </div>
//   )
//   // return(
//   //   <div className='App'>
//   //     <button onClick={() => AddCount(-1)} style={{fontSize:"30px",marginLeft:'10px'}} >MinuseOne</button>
//   //     <button onClick={() => AddCount(1)} style={{fontSize:"30px",marginLeft:'10px'}} >AddOne</button>
//   //     <button onClick={() => AddCount(-count)} style={{fontSize:"30px",marginLeft:'10px'}} >Reset</button>
//   //     <Counter title='1st Counter' count={count}/>
//   //     <Counter title='2nd Counter' count={count}/>
//   //     <Counter {...obj}/>
//   //   </div>
//   // )
// }


// export default App;



import {useState} from 'react'
import Counter from  "./componets/Counter.jsx"
function App() {
  let [count,setCount]=useState(0)
  let AddCount=(val)=>{setCount((count)=>count+val)}
  return (
    <div>
      <button onClick={()=>AddCount(1)} style={{fontSize:"20px"}}>+</button>
      <button onClick={()=>AddCount(-1)} style={{fontSize:"20px"}}>-</button>
      <Counter title={'sda'} count={count}/>
    </div>
  )
}

export default App
