import React from 'react';
import PropTypes from 'prop-types';

const Input = ({name, label, onChange, placeholder, value, error}) => {

    let wrapperClass = 'form-group';
    if (error && error.length > 0) {
      wrapperClass += " " + 'has-error';
    }

    return (
     <div className={wrapperClass}>
        <label htmlFor={name}>{label}</label>
        <div className="field">
          <input type="text"
            name={name}
            className="form-control"
            placeholder={placeholder}
            ref={(input) => { name = input; }}
            value={value}
            onChange={onChange} />
          <div className="input">{error}</div>
        </div>
      </div>
    );
}

Input.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string,
};

export default Input;
