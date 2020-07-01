import React, { Component } from "react";
import Moment from "react-moment";

class ProfileCredentials extends Component {
  render() {
    const { experience, education } = this.props;

    const experienceItems = experience.map((experience) => (
      <li key={experience._id} className="list-group-item">
        <h4>{experience.company}</h4>
        <p>
          <Moment format="YYYY/MM/DD">{experience.from}</Moment>-
          {experience.to === null ? (
            "Now"
          ) : (
            <Moment format="YYYY/MM/DD">{experience.to}</Moment>
          )}{" "}
        </p>
        <p>
          <strong>Position:</strong> {experience.title}{" "}
        </p>
        <p>
          {experience.location === "" ? null : (
            <span>
              <strong>Location:</strong> {experience.location}
            </span>
          )}
        </p>
        <p>
          {experience.description === "" ? null : (
            <span>
              <strong>Description:</strong> {experience.description}
            </span>
          )}
        </p>
      </li>
    ));

    const educationItems = education.map((experience) => (
      <li key={experience._id} className="list-group-item">
        <h4>{experience.school}</h4>
        <p>
          <Moment format="YYYY/MM/DD">{education.from}</Moment>-
          {education.to === null ? (
            "Now"
          ) : (
            <Moment format="YYYY/MM/DD">{education.to}</Moment>
          )}{" "}
        </p>
        <p>
          <strong>Degree:</strong> {experience.degree}{" "}
        </p>
        <p>
          <strong>Field Of Study:</strong> {experience.fieldOfStudy}{" "}
        </p>
        <p>
          {experience.description === "" ? null : (
            <span>
              <strong>Description:</strong> {experience.description}
            </span>
          )}
        </p>
      </li>
    ));

    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <h3 className="text-center text-info">Experience</h3>
            {experienceItems.length > 0 ? (
              <ul className="list-group">{experienceItems}</ul>
            ) : (
              <p className="text-center">No Experience listed</p>
            )}
          </div>
          <div className="col-md-6">
            <h3 className="text-center text-info">Education</h3>
            {educationItems.length > 0 ? (
              <ul className="list-group">{educationItems}</ul>
            ) : (
              <p className="text-center">No Education listed</p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileCredentials;
