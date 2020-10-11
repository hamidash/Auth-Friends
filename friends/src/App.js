import React from 'react';

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Login from "./components/Login";
import Friends from "./components/Friends";
import PrivateRoute from "./components/PrivateRoute";

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/friends">Friends</Link>
          </li>
          {/* <li>
            <Link to="/login" onClick={() => window.localStorage.clear()}>Logout</Link>
          </li> */}
        </ul>
        <Switch>
          <PrivateRoute exact path="/friends" component={Friends} />
          <Route exact path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>

    </Router>
  );
}

export default App;
      