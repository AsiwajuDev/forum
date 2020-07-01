import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import ProfileHeader from "./profileHeader";
import ProfileAbout from "./profileAbout";
import ProfileCredentials from "./profileCredentials";
import ProfileGithub from "./profileGithub";

import Spinner from "../../container/spinner/spinner";

import { getProfileByHandleAction } from "../../actions/profileAction/profileAction";

class ProfileView extends Component {
  componentDidMount() {
    if (this.props.match.params.handle) {
      this.props.getProfileByHandleAction(this.props.match.params.handle);
    }
  }

  render() {
    const { profile, loading } = this.props.profile;
    let profileContent;

    if (profile === null || loading) {
      profileContent = <Spinner />;
    } else {
      profileContent = (
        <div>
          <div className="row">
            <div className="col-md-6">
              <Link to="/profile" className="btn btn-light mb-3 float-left">
                Back To Profiles
              </Link>
            </div>
            <div className="col-md-6"></div>
          </div>
          <ProfileHeader profile={profile} />
          <ProfileAbout />
          <ProfileCredentials />
          <ProfileGithub />
        </div>
      );
    }
    return (
      <div>
        <div className="profile">
          <div className="container">
            <div className="col-md-12">{profileContent}</div>
          </div>
        </div>
      </div>
    );
  }
}

ProfileView.propTypes = {
  getProfileByHandleAction: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfileByHandleAction })(
  ProfileView
);
