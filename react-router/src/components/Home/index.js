import React, { Component } from 'react';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
    this.handleChangeData = this.handleChangeData.bind(this);
  }

  handleChangeData(e) {
    const data = e.target.value;
    const array = this.state.data.slice();

    array.push(data);

    this.setState({ data: array });
  }

  render() {
    return (
      <div>
        <h1>I'm home bro</h1>

        <input type="text" placeholder="Enter something" onChange={this.handleChangeData}/>
        <ul>
          { this.state.data.map((element,key) => <li key={key}>{element}</li>) }
        </ul>
      </div>
    );
  }
}
