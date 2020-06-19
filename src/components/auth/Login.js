import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import TextFieldGroup from "../../container/inputGroup/textFieldGroup";

import { loginUserAction } from "../../actions/authAction/authAction";

class Login extends Component {
  constructor(props) {
    super(props);
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

  UNSAFE_componentWillReceiveProps(nextProps) {
    //check if user is Authenticated
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  onSubmit(event) {
    event.preventDefault();

    const returnUserData = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginUserAction(returnUserData);
  }

  render() {
    const { errors } = this.state;

    return (
      <div>
        <div className="login p-4">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-10 col-xs-10 m-auto">
                <div className="card shade p-5 mb-4 bg-white radius">
                  <h1 className="text-center">Log In</h1>
                  <p className="lead text-center">
                    Login to your {this.props.brandName} account
                  </p>
                  <form onSubmit={this.onSubmit} className="p-4">
                    <TextFieldGroup
                      placeholder="Email Address"
                      name="email"
                      type="email"
                      value={this.state.email}
                      onChange={this.onChange}
                      error={errors.email}
                    />

                    <TextFieldGroup
                      placeholder="Password"
                      name="password"
                      type="password"
                      value={this.state.password}
                      onChange={this.onChange}
                      error={errors.password}
                    />

                    <input
                      type="submit"
                      value="Login"
                      style={{
                        width: "200px",
                        fontSize: "1.5rem",
                      }}
                      className="btn btn-info btn-block m-auto mt-4 pb-1 pt-1"
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
  loginUserAction: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUserAction })(withRouter(Login));
