import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import LoginPage from "./components/LoginPage";
import FriendsList from "./components/FriendsList";

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/friends">Friends List</Link>
          </li>
        </ul>
        <Route path="/login" component={LoginPage} />
        <Route path="/friends" component={FriendsList} />
      </div>
    </Router>
  );
}

export default App;
