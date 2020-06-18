import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const InputIconGroup = ({
  name,
  placeholder,
  value,
  error,
  icon,
  type,
  onChange,
}) => {
  return (
    <div>
      <div className="input-group mb-3">
        <div className="input-group-prepend"></div>
        <span className="input-group-text">
          <i className={icon} />
        </span>
        <input
          type={type}
          className={classnames("form-control", {
            "is-invalid": error,
          })}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
        />
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    </div>
  );
};

InputIconGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  icon: PropTypes.string,
  type: PropTypes.string.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

InputIconGroup.defaultProps = {
  type: "text",
};

export default InputIconGroup;
