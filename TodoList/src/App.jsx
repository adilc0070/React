import { useState } from 'react';
import './App.css';

function App() {
  let { toDos, setToDos } = useState([{}])
  let { toDo, setToDo } = useState('')
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e) => setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={() => setToDos([...toDos, toDo])} className="fas fa-plus"></i>
      </div>

      <div className="todos">
        {
          toDos && toDos.map((value, index) => {


            return (<div key={index} className="todo">
              <div key={index} className="left">
                <input key={index} type="checkbox" name="" id="" />
                <p key={index}>{value}</p>
              </div>
              <div key={index} className="right">
                <i key={index} className="fas fa-times"></i>
              </div>
            </div>)
          })
        }

      </div>
    </div>
  );
}

export default App;