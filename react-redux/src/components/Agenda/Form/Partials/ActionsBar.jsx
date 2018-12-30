import React from 'react';

import Save from '../../../Common/Button';
import Clean from '../../../Common/Button';

const ActionsBar = () => (
  <div className="agenda--form_barra_acciones">
    <Save className="satisfactorio" text="Save"/>
    <Clean className="limpiar" text="Clean"/>
  </div>
);

export default ActionsBar;
