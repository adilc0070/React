import React, { useEffect, useState } from 'react'

function App() {
  let [count, setCount] = useState(0)
  let [count1, setCount1] = useState(1)
  useEffect(() => {
    console.log("count updated" + count);
    console.log("count updated" + count1);
    return (
      console.log('exited')
    )

  }, [count, count1])

  return (
    <>
      <div>
        <h1>Counter:{count}</h1>
        {count >= 5 ? (<button onClick={() => { setCount(count - 1) }}>decrement</button>) : (
          <>
            <button onClick={() => { setCount(count + 1) }}>increment</button>
            <button onClick={() => { setCount(count - 1) }}>decrement</button>
          </>
        )}


        <button onClick={() => { setCount(0) }}>reset</button>
      </div>
      <div>
        <h1>Counter1:{count1}</h1>
        <button onClick={() => { setCount1(count1 + 3) }}>increment 3</button>
        <button onClick={() => { setCount1(count1 - 3) }}>decrement 3</button>
        <button onClick={() => { setCount1(0) }}>reset 3</button>
      </div>
    </>
  )
}

export default App
