import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Spinner from "../../container/spinner/spinner";

import { getCurrentProfile } from "../../actions/profileAction/profileAction";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let dashboardContent;

    if (profile === null || loading) {
      dashboardContent = <Spinner />;
    } else {
      //check if logged in user has profile
      if (Object.keys(profile).length > 0) {
        dashboardContent = <h4>Display Profile</h4>;
      } else {
        //user is logged in but no profile found
        dashboardContent = (
          <div className="text-center">
            <p className="lead text-muted">Welcome {user.name},</p>
            <p>
              You dont have a profile yet, click the button below to update your
              dashboard
            </p>
            <Link to="/create-profile" className="btn btn-lg btn-info">
              Create Profile
            </Link>
          </div>
        );
      }
    }

    return (
      <div>
        <div className="dashboard">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="display-4">Dashboard</h1>
                {/* <p className="lead text-muted">Welcome John Doe</p> */}
                {dashboardContent}

                {/* Dashboard Actions */}
                {/* <div className="btn-group mb-4" role="group">
                  <a href="edit-profile.html" className="btn btn-light">
                    <i className="fas fa-user-circle text-info mr-1"></i> Edit
                    Profile
                  </a>
                  <a href="add-experience.html" className="btn btn-light">
                    <i className="fab fa-black-tie text-info mr-1"></i>
                    Add Experience
                  </a>
                  <a href="add-education.html" className="btn btn-light">
                    <i className="fas fa-graduation-cap text-info mr-1"></i>
                    Add Education
                  </a>
                </div> */}
                {/* Experience */}
                {/* <div>
                  <h4 className="mb-2">Experience Credentials</h4>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Company</th>
                        <th>Title</th>
                        <th>Years</th>
                        <th />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Tech Guy Web Solutions</td>
                        <td>Senior Developer</td>
                        <td>02-03-2009 - 01-02-2014</td>
                        <td>
                          <button className="btn btn-danger">Delete</button>
                        </td>
                      </tr>
                      <tr>
                        <td>Traversy Media</td>
                        <td>Instructor & Developer</td>
                        <td>02-03-2015 - Now</td>
                        <td>
                          <button className="btn btn-danger">Delete</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div> */}

                {/* Education */}

                {/* <div>
                  <h4 className="mb-2">Education Credentials</h4>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>School</th>
                        <th>Degree</th>
                        <th>Years</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Northern Essex</td>
                        <td>Associates</td>
                        <td>02-03-2007 - 01-02-2009</td>
                        <td>
                          <button className="btn btn-danger">Delete</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div> */}
                {/* <div style="margin-bottom: 60px;">
                  <button className="btn btn-danger">Delete My Account</button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
