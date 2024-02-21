import React, { useRef, useState } from 'react'

function Timer() {
    let [time,setTime]=useState(0)
    let inter=useRef(null)
    let start=()=>{
        inter.current=setInterval(()=>{
            setTime(time=>time+1);
        },1000)
    }
    let stop=()=>{
        clearInterval(inter.current)
    }
    let reSet=()=>{
        clearInterval(inter.current)
        setTime(0)
    }
  return (
    
    <div>
    <h2>{time}</h2>
      <button onClick={start} >start</button>
      <button onClick={stop} >stop</button>
      <button onClick={reSet} >reset</button>
    </div>
  )
}

export default Timer
