import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Spinner from "../../container/spinner/spinner";
import ProfileItems from "./profileItems";

import { getProfilesAction } from "../../actions/profileAction/profileAction";

class Profile extends Component {
  componentDidMount() {
    this.props.getProfilesAction();
  }

  render() {
    const { profiles, loading } = this.props.profile;

    let profileItems;

    if (profiles === null || loading) {
      profileItems = <Spinner />;
    } else {
      if (profiles.length > 0) {
        profileItems = profiles.map((profile) => (
          <ProfileItems key={profile._id} profile={profile} />
        ));
      } else {
        profileItems = <h4>No Profile found</h4>;
      }
    }

    return (
      <div>
        <div className="profiles">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="display-4 text-center">Developer Profiles</h1>
                <p className="lead text-center">
                  Browse and connect with developers
                </p>
                {profileItems}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  getProfilesAction: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfilesAction })(Profile);
