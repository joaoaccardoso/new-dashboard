import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';
import Users from './pages/Users/Users';
import About from './pages/About/About';
import MenuConfig from './components/MenuConfig/MenuConfig';
import Calendar from './pages/Calendar/Calendar';

function App() {
  return (
    <div className="App">
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <MenuConfig/>
        <div className="Main">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/calendar">
              <Calendar />
            </Route>
            <Route path="/">
              <Dashboard />
            </Route>
            
          </Switch>
        </div>
      </div>
  );
}

export default App;