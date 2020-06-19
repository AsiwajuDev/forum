import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import TextFieldGroup from "../../container/inputGroup/textFieldGroup";

import { registerUserAction } from "../../actions/authAction/authAction";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };

    this.props.registerUserAction(newUser, this.props.history);
  }

  render() {
    const { errors } = this.state;

    return (
      <div>
        <div className="register p-4">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-10 col-xs-10 m-auto">
                <div className="card shade p-5 mb-4 bg-white radius">
                  <h1 className="text-center">Register</h1>
                  <p className="lead text-center">
                    Create your {this.props.brandName} account
                  </p>

                  <form noValidate onSubmit={this.onSubmit} className="p-4">
                    <TextFieldGroup
                      placeholder="Name"
                      name="name"
                      value={this.state.name}
                      onChange={this.onChange}
                      error={errors.name}
                    />

                    <TextFieldGroup
                      placeholder="Email Address"
                      name="email"
                      type="email"
                      value={this.state.email}
                      onChange={this.onChange}
                      error={errors.email}
                      info="This site uses Gravatar so if you want a profile image,
                      use a Gravatar email"
                    />

                    <TextFieldGroup
                      placeholder="Password"
                      name="password"
                      type="password"
                      value={this.state.password}
                      onChange={this.onChange}
                      error={errors.password}
                    />

                    <TextFieldGroup
                      placeholder="Confirm Password"
                      name="password2"
                      type="password"
                      value={this.state.password2}
                      onChange={this.onChange}
                      error={errors.password2}
                    />

                    <input
                      type="submit"
                      value="Register"
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

Register.propTypes = {
  registerUserAction: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { registerUserAction })(
  withRouter(Register)
);
