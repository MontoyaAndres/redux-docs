import React, { Component } from 'react';
import { connect } from 'react-redux';

// Partial
import Form from './Form';
import Grid from './Grid';

class Agenda extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { contacts } = this.props;
    return (
      <div className="agenda">
        <Form />
        <Grid contacts={contacts}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: state.contacts.contacts
});

export default connect(mapStateToProps)(Agenda);
