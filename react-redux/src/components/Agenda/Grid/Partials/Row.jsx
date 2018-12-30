import React from 'react';
import propTypes from 'prop-types';

import ActionsBar from './ActionsBar';

const Row = ({ contact, onEdit, onDelete }) => (
  <div className="agenda--grid_fila">
    <div className="agenda--grid_celda delimiter-right grid--25">
      { contact.nombre }
    </div>
    <div className="agenda--grid_celda delimiter-right grid--25">
      { contact.celular }
    </div>
    <div className="agenda--grid_celda align-center grid--50">
      <ActionsBar
        id={contact.id}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    </div>
  </div>
);

Row.propTypes = {
  contact: propTypes.object,
  onEdit: propTypes.func,
  onDelete: propTypes.func
};

export default Row;
