import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { Dashboard } from "./Dashboard";
import UserDetails from "./UserDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/users/:userId" component={UserDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
