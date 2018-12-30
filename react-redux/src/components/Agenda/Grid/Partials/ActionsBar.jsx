import React from 'react';
import propTypes from 'prop-types';

import Edit from '../../../Common/Button';
import Delete from '../../../Common/Button';

const ActionsBar = ({ id, onEdit, onDelete }) => (
  <div className="agenda--form_barra_acciones">
    <Edit
      className="borde-primario"
      text="Edit"
      onClick={ onEdit }
    />
    <Delete
      className="borde-error"
      text="Delete"
      onClick={ onDelete }
    />
  </div>
);

ActionsBar.propTypes = {
  id: propTypes.number,
  onEdit: propTypes.func,
  onDelete: propTypes.func
};

export default ActionsBar;
