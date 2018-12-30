import React from 'react';
import propTypes from 'prop-types';

const Button = ({ className, text, onClick }) => {
  return (
    <button
      className={`common--button ${className}`}
      onClick={onclick}
    >
      { text }
    </button>
  );
};

Button.defaultProps = {
  className: ''
};

Button.propTypes = {
  className: propTypes.string,
  onClick: propTypes.func,
  text: propTypes.string
};

export default Button;
