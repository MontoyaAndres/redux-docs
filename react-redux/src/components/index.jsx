import React, { Component } from 'react';

// components
import AppHeader from './AppHeader';
import Agenda from './Agenda';

class AppAgenda extends Component {
  render() {
    return (
      <div className="agenda">
        <AppHeader/>
        <Agenda/>
      </div>
    );
  }
}

export default AppAgenda;
