import React, { Component } from 'react';
import { Button, Container, Icon } from 'semantic-ui-react';

class ClockControls extends Component {
  constructor(props) {
    super(props)

    this.startAction  = this.startAction.bind(this)
    this.reusmeAction = this.reusmeAction.bind(this)
    this.pauseAction  = this.pauseAction.bind(this)
    this.stopAction   = this.stopAction.bind(this)
  }

  startAction() {
    this.props.onChangeControlState('start')
  }

  reusmeAction() {
    this.props.onChangeControlState('resume')
  }

  pauseAction() {
    this.props.onChangeControlState('pause')
  }

  stopAction() {
    this.props.onChangeControlState('stop')
  }

  render() {
    return (
      <Container textAlign='center'>
        { this.props.controlState === 'start' &&
            <Button icon color='green' labelPosition='left' onClick={this.startAction}>
              <Icon name='play' />
              Play
            </Button> }
        { this.props.controlState === 'paused' &&
          <Button icon color='green' labelPosition='left' onClick={this.reusmeAction}>
            <Icon name='repeat' />
            Resume
          </Button> }
        { this.props.controlState === 'started' &&
          <Button icon color='yellow' labelPosition='left' onClick={this.pauseAction}>
            <Icon name='pause' />
            Pause
          </Button> }
        <Button icon color='red' labelPosition='left' onClick={this.stopAction}>
          <Icon name='stop' />
          Reset
        </Button>
      </Container>
    )
  }
}

export default ClockControls;
