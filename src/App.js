import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { Provider } from "react-redux";

import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authAction/authAction";

import store from "./store";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components//layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

import "./App.css";

const brandName = "Dev-Forum";

//check for token
if (localStorage.jwtToken) {
  //set Auth token header auth
  setAuthToken(localStorage.jwtToken);
  //decode token for user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  //set user and authenticated
  store.dispatch(setCurrentUser(decoded));

  //check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    //logout user
    store.dispatch(logoutUser());
    //clear current profile

    //redirect to login
    window.location.href = "/login";
  }
}

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
