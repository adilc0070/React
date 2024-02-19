import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./Containers/about";
import Profile from "./Containers/profile";

function App() {
  return (
    <>

      <Router>
      <Link style={{marginLeft:"40px",color:"red", textDecoration:"none",}} to='/'>home</Link>
      <Link style={{marginLeft:"40px",color:"red", textDecoration:"none",}} to='/pro'>profilePage</Link>
      <Link style={{marginLeft:"40px",color:"red", textDecoration:"none",}} to='/about'>about</Link>
        <Routes>
          <Route Component={Profile} path="/pro" />
          <Route Component={About} path="/about" />
        </Routes>
      </Router>
    </>
  )
}

export default App;
