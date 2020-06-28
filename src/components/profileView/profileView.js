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
    return (
      <div>
        <h1>Test</h1>
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
