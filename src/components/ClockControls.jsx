import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Container, Icon } from 'semantic-ui-react'

class ClockControls extends Component {
  constructor(props) {
    super(props)

    this.startAction  = this.startAction.bind(this)
    this.reusmeAction = this.reusmeAction.bind(this)
    this.pauseAction  = this.pauseAction.bind(this)
    this.stopAction   = this.stopAction.bind(this)
  }

  startAction() {
    this.props.onChange('start')
  }

  reusmeAction() {
    this.props.onChange('resume')
  }

  pauseAction() {
    this.props.onChange('pause')
  }

  stopAction() {
    this.props.onChange('stop')
  }

  render() {
    return (
      <Container textAlign='center'>
        { this.props.clockState === 'start' &&
            <Button icon color='green' labelPosition='left' onClick={this.startAction}>
              <Icon name='play' />
              Play
            </Button> }
        { this.props.clockState === 'paused' &&
          <Button icon color='green' labelPosition='left' onClick={this.reusmeAction}>
            <Icon name='repeat' />
            Resume
          </Button> }
        { this.props.clockState === 'started' &&
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

ClockControls.propTypes = {
  clockState: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default ClockControls
