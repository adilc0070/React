import { Routes, Route, Link } from "react-router-dom";
import About from "./Containers/about";
import Profile from "./Containers/profile";
import { useState } from "react";
import { AppContext } from "./appcontext";
function App() {
  let [state, setState] = useState(10);

  return (
    <div>
      <Link
        style={{ marginLeft: "40px", color: "red", textDecoration: "none" }}
        to="/"
      >
        home
      </Link>
      <Link
        style={{ marginLeft: "40px", color: "red", textDecoration: "none" }}
        to="/profile"
      >
        profilePage
      </Link>
      <Link
        style={{ marginLeft: "40px", color: "red", textDecoration: "none" }}
        to="/about"
      >
        about
      </Link>
      <div>this is Home page</div>
      <AppContext.Provider value={{data:state}}>
        <Routes>
          <Route element={<Profile/>} path="/profile"></Route>
          <Route Component={About} path="/about" />
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;
