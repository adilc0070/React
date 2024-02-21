import { Routes, Route, Link } from "react-router-dom";
import About from "./Containers/about";
import Profile from "./Containers/profile";
import { useState } from "react";
import { AppContext } from "./appcontext";
import ParantComponent from "./components/ParantComponent";
import Counter from "./components/counter";
import Timer from "./components/timer";
import { Context } from "./components/sampleContext";
function App() {
  let [state, setState] = useState(10);
  let [st,setSt]=useState('asd')

  return (
    <div>
      <>
        <Timer />
        <ParantComponent />
        <Counter />
      </>
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
      <AppContext.Provider value={{ data: state }}>
        <Context.Provider value={{ asasd:st }}>
          <Routes>
            <Route element={<Profile />} path="/profile"></Route>
            <Route Component={About} path="/about" />
          </Routes>
        </Context.Provider>
      </AppContext.Provider>
    </div>
  );
}

export default App;
