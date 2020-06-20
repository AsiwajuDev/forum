import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { deleteEducationAction } from "../../actions/profileAction/profileAction";

class Education extends Component {
  onDeleteClick(id) {
    this.props.deleteEducationAction(id);
  }

  render() {
    const education = this.props.education.map((edu) => (
      <tr key={edu._id}>
        <td>{edu.school}</td>
        <td>{edu.degree} </td>
        <td>{edu.fieldOfStudy} </td>
        <td>
          <Moment format="YYYY/MM/DD">{edu.from}</Moment> -
          {edu.to === null ? (
            " Present"
          ) : (
            <Moment format="YYYY/MM/DD">{edu.to}</Moment>
          )}
        </td>
        <td>
          <button
            onClick={this.onDeleteClick.bind(this, edu._id)}
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
              <th>School</th>
              <th>Degree</th>
              <th>Field Of Study</th>
              <th>Years</th>
              <th></th>
            </tr>
            {education}
          </table>
        </div>
      </div>
    );
  }
}

Education.propTypes = {
  deleteEducationAction: PropTypes.func.isRequired,
};

export default connect(null, { deleteEducationAction })(Education);
