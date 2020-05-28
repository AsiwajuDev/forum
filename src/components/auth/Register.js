import React, { Component } from "react";
import axios from "axios";
import classnames from "classnames";

class Register extends Component {
  constructor(props) {
    super();
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

    axios
      .post("/users/register", newUser)
      .then((response) => console.log(response.data))
      .catch((error) => this.setState({ errors: error.response.data }));
  }

  render() {
    const { errors } = this.state;

    return (
      <div>
        <div className="register p-4">
          <div className="container">
            <div className="row">
              <div className="col-md-5 col-sm-10 col-xs-10 m-auto">
                <div className="card shade p-5 mb-4 bg-white radius">
                  <h1 className="text-center">Register</h1>
                  <p className="lead text-center">
                    Create your {this.props.brandName} account
                  </p>

                  <form noValidate onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        className={classnames("form-control", {
                          "is-invalid": errors.name,
                        })}
                        placeholder="Name"
                        name="name"
                        value={this.state.name}
                        onChange={this.onChange}
                      />
                      {errors.name && (
                        <div className="invalid-feedback">{errors.name}</div>
                      )}
                    </div>
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
                      <small className="form-text text-muted text-center">
                        This site uses Gravatar so if you want a profile image,
                        use a Gravatar email
                      </small>
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
                    <div className="form-group">
                      <input
                        type="password"
                        className={classnames("form-control", {
                          "is-invalid": errors.password2,
                        })}
                        placeholder="Confirm Password"
                        name="password2"
                        value={this.state.password2}
                        onChange={this.onChange}
                      />
                      {errors.password2 && (
                        <div className="invalid-feedback">
                          {errors.password2}
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

export default Register;
