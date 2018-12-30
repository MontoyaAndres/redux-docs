import React from 'react';
import propTypes from 'prop-types';

const Input = ({ className, value, placeholder }) => {
  return (
    <input
      className={`common--input_text ${className}`}
      type="text"
      placeholder={placeholder}
      value={value}
    />
  );
};

Input.defaultProps = {
  className: ''
};

Input.prototypes = {
  value: propTypes.oneOfType([
    propTypes.string,
    propTypes.number
  ]),
  placeHolder: propTypes.string
};

export default Input;
