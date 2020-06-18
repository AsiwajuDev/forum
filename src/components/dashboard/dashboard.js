import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Spinner from "../../container/spinner/spinner";

import { getCurrentProfileAction } from "../../actions/profileAction/profileAction";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfileAction();
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
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  getCurrentProfileAction: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getCurrentProfileAction })(Dashboard);
