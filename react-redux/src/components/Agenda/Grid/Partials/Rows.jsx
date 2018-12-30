import React from 'react';

import Row from './Row';

const Rows = ({ contacts }) => (
  <div className="agenda--grid_filas">
    {
      contacts.map(
        (contact, index) => <Row key={index} contact={contact}/>
      )
    }
  </div>
);

export default Rows;
