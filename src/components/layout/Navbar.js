import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { logoutUserAction } from "../../actions/authAction/authAction";
import { clearCurrentProfileAction } from "../../actions/profileAction/profileAction";

class Navbar extends Component {
  onLogoutClick(event) {
    event.preventDefault();

    this.props.clearCurrentProfileAction();

    this.props.logoutUserAction();
    this.props.history.push("/posts");
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLink = (
      <ul classNameName="navbar-nav ml-auto">
        <li classNameName="nav-item">
          <Link
            classNameName="nav-link"
            to="/posts"
            onClick={this.onLogoutClick.bind(this)}
          >
            <img
              classNameName="rounded-circle"
              src={user.avatar}
              alt={user.name}
              style={{ width: "25px", marginRight: "5px" }}
              title="You must have a gravatar connected to your email to display image"
            />{" "}
            LogOut
          </Link>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul classNameName="navbar-nav ml-auto">
        <li classNameName="nav-item">
          <Link classNameName="nav-link" to="/register">
            Register
          </Link>
        </li>
        <li classNameName="nav-item">
          <Link classNameName="nav-link" to="/login">
            Login
          </Link>
        </li>
      </ul>
    );

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link classNameName="navbar-brand" to="/">
            {this.props.brandName}
          </Link>
          <ul className="navbar-nav mr-auto">
            <li classNameName="nav-item">
              <Link classNameName="nav-link" to="/profiles">
                {" "}
                Developers
              </Link>
            </li>
          </ul>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse text-center"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav mr-auto">
              {isAuthenticated ? authLink : guestLinks}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

Navbar.propTypes = {
  logoutUserAction: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {
  logoutUserAction,
  clearCurrentProfileAction,
})(withRouter(Navbar));
