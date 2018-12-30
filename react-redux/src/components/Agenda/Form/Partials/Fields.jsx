import React from 'react';

import Name from '../../../Common/input';
import Phone from '../../../Common/input';

const Fields = () => (
  <div className="agenda--form_inputs">
    <Name placeholder="Name"/>
    <Phone clasName="celular" placeholder="Phone"/>
  </div>
);

export default Fields;
