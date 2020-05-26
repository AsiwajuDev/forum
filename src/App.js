import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components//layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

import "./App.css";

const brandName = "Dev-Forum";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar brandName={brandName} />
          <Route
            exact
            path="/"
            render={() => <Landing brandName={brandName} />}
          />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </div>
          <Footer brandName={brandName} />
        </div>
      </Router>
    );
  }
}

export default App;
