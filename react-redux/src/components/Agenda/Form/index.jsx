import React from 'react';

// Partials
import LabelUpdating from './Partials/LabelUpdating';
import Fields from './Partials/Fields';
import ActionsBar from './Partials/ActionsBar';

const Form = () => (
  <div className="agenda--form">
    <LabelUpdating visible/>
    <div className="agenda--form_contenedor">
      <Fields/>
      <ActionsBar/>
    </div>
  </div>
);

export default Form;
