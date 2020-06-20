import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { deleteExperienceAction } from "../../actions/profileAction/profileAction";

class Experience extends Component {
  onDeleteClick(id) {
    this.props.deleteExperienceAction(id);
  }

  render() {
    const experience = this.props.experience.map((exp) => (
      <tr key={exp._id}>
        <td>{exp.company}</td>
        <td>{exp.title} </td>
        {/* <td>{exp.description} </td> */}
        <td>
          <Moment format="YYYY/MM/DD">{exp.from}</Moment> -
          {exp.to === null ? (
            " Present"
          ) : (
            <Moment format="YYYY/MM/DD">{exp.to}</Moment>
          )}
        </td>
        <td>
          <button
            onClick={this.onDeleteClick.bind(this, exp._id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    ));

    return (
      <div>
        <div>
          <h4 className="mb-4">Experience</h4>
          <table className="table">
            <tr>
              <th>Company</th>
              <th>Title</th>
              {/* <th>Description</th> */}
              <th>Years</th>
              <th></th>
            </tr>
            {experience}
          </table>
        </div>
      </div>
    );
  }
}

Experience.propTypes = {
  deleteExperienceAction: PropTypes.func.isRequired,
};

export default connect(null, { deleteExperienceAction })(Experience);
