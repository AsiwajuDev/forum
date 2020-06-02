import React, { Component } from "react";

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

  onSubmit(event) {
    event.preventDefault();

    const returnUser = {
      email: this.state.email,
      password: this.state.password,
    };

    console.log(returnUser);
  }

  render() {
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
                        className="form-control"
                        placeholder="Email Address"
                        name="email"
                        value={this.state.email}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        value={this.state.password}
                        onChange={this.onChange}
                      />
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

export default Login;
