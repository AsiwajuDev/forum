import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";

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
      <Provider store={store}>
        <Router>
          <div>
            <Navbar brandName={brandName} />
            <Route
              exact
              path="/"
              render={() => <Landing brandName={brandName} />}
            />
            <div className="container">
              <Route
                exact
                path="/register"
                render={() => <Register brandName={brandName} />}
              />
              <Route
                exact
                path="/login"
                render={() => <Login brandName={brandName} />}
              />
            </div>
            <Footer brandName={brandName} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
