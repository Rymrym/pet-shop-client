import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import NavBar from "./component/Navbar";
import SignIn from "./component/Login";
import SignUp from "./component/Signup";
import Home from "./component/Home"
import { UserRoute } from "./component/privateRoute"

function App() {

  return (
    <Router>
      <NavBar />
      <Route path="/signup" exact>
        <SignUp />
      </Route>
      <Route path="/" exact>
        <SignIn />
      </Route>
      <UserRoute path="/home">
        <Home />
      </UserRoute>
    </Router>
  );
}

export default App;