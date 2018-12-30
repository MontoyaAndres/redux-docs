import React from 'react';
import propTypes from 'prop-types';

const labelUpdating = ({ visible }) => visible && (
  <div className="agenda--form_etiqueta_actualizacion">
    <span className="etiqueta">Update</span>
  </div>
);

labelUpdating.propTypes = {
  visible: propTypes.bool
};

export default labelUpdating;
