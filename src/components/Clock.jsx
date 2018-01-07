import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';

class Clock extends Component {
  render() {
    return (
      <Header textAlign='center' size='huge'>
        23:22:54
      </Header>
    )
  }
}

export default Clock;
