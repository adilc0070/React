import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import About from './Containers/about';
import Profile from './Containers/profile';

function App() {
  return (
    <Router>
      <div>
        <Link to="/about"><button>About</button></Link>
        <Link to="/profile"><button>Profile</button></Link>
      </div>

      <Route component={About} path='/about' />
      <Route component={Profile} path='/profile' />
    </Router>
  );
}

export default App;
