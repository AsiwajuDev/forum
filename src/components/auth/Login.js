import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import classnames from "classnames";

import { loginUser } from "../../actions/authAction/authAction";

class Login extends Component {
  constructor(props) {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  componentWillReceiveProps(nextProps) {
    //check if user is Authenticated
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(event) {
    event.preventDefault();

    const returnUserData = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginUser(returnUserData);
  }

  render() {
    const { errors } = this.state;

    return (
      <div>
        <div className="login p-4">
          <div className="container">
            <div className="row">
              <div className="col-md-5 col-sm-10 col-xs-10 m-auto">
                <div className="card shade p-5 mb-4 bg-white radius">
                  <h1 className="text-center">Log In</h1>
                  <p className="lead text-center">
                    Login to your {this.props.brandName} account
                  </p>
                  <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <input
                        type="email"
                        className={classnames("form-control", {
                          "is-invalid": errors.email,
                        })}
                        placeholder="Email Address"
                        name="email"
                        value={this.state.email}
                        onChange={this.onChange}
                      />
                      {errors.email && (
                        <div className="invalid-feedback">{errors.email}</div>
                      )}
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className={classnames("form-control", {
                          "is-invalid": errors.password,
                        })}
                        placeholder="Password"
                        name="password"
                        value={this.state.password}
                        onChange={this.onChange}
                      />
                      {errors.password && (
                        <div className="invalid-feedback">
                          {errors.password}
                        </div>
                      )}
                    </div>
                    <input
                      type="submit"
                      className="btn btn-info btn-block mt-5"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(withRouter(Login));
