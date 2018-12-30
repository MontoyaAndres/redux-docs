import React from 'react';
import propTypes from 'prop-types';

// Partials
import Columns from './Partials/Columns';
import Rows from './Partials/Rows';
import contacts from '../../../app/Reducers/Contacts';

const Grid = ({ contacts }) => (
  <div className="agenda--grid">
    <Columns/>
    <Rows contacts={contacts}/>
  </div>
);

export default Grid;
