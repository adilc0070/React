import { Routes, Route, Link } from "react-router-dom";
import About from "./Containers/about";
import Profile from "./Containers/profile";
import { useState } from "react";

function App() {
  let [state,setState]=useState(1)
  return (
    <div>


      <Link style={{marginLeft:"40px",color:"red", textDecoration:"none" }} to='/'>home</Link>
      <Link style={{marginLeft:"40px",color:"red", textDecoration:"none" }} to='/profile'>profilePage</Link>
      <Link style={{marginLeft:"40px",color:"red", textDecoration:"none" }} to='/about'>about</Link>
        <Routes>
          <Route element={<Profile prop={state} />} path="/profile" >
      
          </Route>
          <Route Component={About} path="/about" />
        </Routes>
    </div>
  )
}

export default App;
