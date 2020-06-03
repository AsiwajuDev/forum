import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { logoutUser } from "../../actions/authAction/authAction";

class Navbar extends Component {
  onLogoutClick(event) {
    event.preventDefault();

    this.props.logoutUser();
    this.props.history.push("/posts");
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLink = (
      <ul className="navbar-nav ml-auto">
        {/* <li className="nav-item">
          <Link className="nav-link" to="/register">
            Register
          </Link>
        </li> */}
        <li className="nav-item">
          <Link
            className="nav-link"
            to="/posts"
            onClick={this.onLogoutClick.bind(this)}
          >
            <img
              className="rounded-circle"
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
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/register">
            Register
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
      </ul>
    );

    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-4 p-3">
          <Link className="navbar-brand" to="/">
            {this.props.brandName}
          </Link>

          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/profiles">
                  {" "}
                  Developers
                </Link>
              </li>
            </ul>
            {isAuthenticated ? authLink : guestLinks}
          </div>
        </nav>
      </div>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(withRouter(Navbar));

// <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4 p-3">
//   <div className="container">
//     <Link className="navbar-brand" to="/">
//       {this.props.brandName}
//     </Link>
//     <button
//       className="navbar-toggler"
//       type="button"
//       data-toggle="collapse"
//       data-target="#mobile-nav"
//     >
//       <span className="navbar-toggler-icon"></span>
//     </button>

//     <div className="collapse navbar-collapse" id="mobile-nav">
//       <ul className="navbar-nav mr-auto">
//         <li className="nav-item">
//           <Link className="nav-link" to="/profiles">
//             {" "}
//             Developers
//           </Link>
//         </li>
//       </ul>
//       {isAuthenticated ? authLink : guestLinks}
//     </div>
//   </div>
// </nav>
