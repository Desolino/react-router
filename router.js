import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function RouterProva() {
  return (
    <Router>
      <div>
        <nav>
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
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/" exact>
          <h1>Home</h1>
        </Route>
        <Route path="/about">
            <h1>About</h1>
          </Route>
        <Route path="/users">
          <h1>Users</h1>
        </Route>          
        </Switch>
      </div>
    </Router>
  );
}
 