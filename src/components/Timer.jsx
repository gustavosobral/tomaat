import React, { Component } from 'react';
import { Checkbox, Divider, Form, Header, Message, Segment } from 'semantic-ui-react';

import Clock from './Clock';
import ClockControls from './ClockControls';

class Timer extends Component {
  constructor(props) {
    super(props)

    this.state={
      timer: 0,
      timerLimit: 1500,
      controlState: 'start',
      value: 'work',
      hasNotification: false,
      interval: null,
      alarmAudio: new Audio('alarm.mp3')
    }

    this.soundAlarm                = this.soundAlarm.bind(this)
    this.changeClockState          = this.changeClockState.bind(this)
    this.startClock                = this.startClock.bind(this)
    this.resumeClock               = this.resumeClock.bind(this)
    this.pauseClock                = this.pauseClock.bind(this)
    this.stopClock                 = this.stopClock.bind(this)
    this.incrementTimer            = this.incrementTimer.bind(this)
    this.checkAndIncrementTimer    = this.checkAndIncrementTimer.bind(this)
    this.renderNotification        = this.renderNotification.bind(this)
    this.handleNotificationDismiss = this.handleNotificationDismiss.bind(this)
    this.handleCheckboxChange      = this.handleCheckboxChange.bind(this)
  }

  handleCheckboxChange(e, { value }) {
    switch(value) {
      case 'short_brake':
        this.setState({ timerLimit: 300 })
        break
      case 'long_brake':
        this.setState({ timerLimit: 600 })
        break
      default:
        this.setState({ timerLimit: 1500 })
    }

    this.stopClock()
    this.setState({ value })
  }

  soundAlarm() {
    this.state.alarmAudio.play()
    this.setState({hasNotification: true})
  }

  startClock() {
    this.setState({timer: 0, controlState: 'started', hasNotification: false, interval: setInterval(this.checkAndIncrementTimer, 1000)})
  }

  resumeClock() {
    this.setState({controlState: 'started', interval: setInterval(this.checkAndIncrementTimer, 1000)})
  }

  pauseClock() {
    this.setState({controlState: 'paused'})
    clearInterval(this.state.interval)
  }

  stopClock() {
    this.setState({timer: 0, controlState: 'start', hasNotification: false})
    clearInterval(this.state.interval)
  }

  checkAndIncrementTimer() {
    if(this.state.timer >= this.state.timerLimit) {
      clearInterval(this.state.interval)
      this.stopClock()
      this.soundAlarm()
    } else {
      this.incrementTimer()
    }
  }

  incrementTimer() {
    this.setState({timer: this.state.timer + 1})
  }

  handleNotificationDismiss() {
    this.setState({hasNotification: false})
  }

  changeClockState(newState) {
    switch(newState) {
      case 'start':
        this.startClock()
        break
      case 'resume':
        this.resumeClock()
        break
      case 'pause':
        this.pauseClock()
        break
      default:
        this.stopClock()
    }
  }

  renderNotification() {
    return(
      <Message positive
        onDismiss={this.handleNotificationDismiss}
        icon='clock'
        header='You time is complete!'
      />
    )
  }

  render() {
    return (
      <div className='timer'>
        { this.state.hasNotification && this.renderNotification() }
        <Segment padded>
          <Header color='red' size='huge'>Tomaat</Header>
          <Divider horizontal>Clock</Divider>
          <Clock timer={this.state.timer}/>
          <Divider horizontal>Timer Type</Divider>
          <Form>
            <Form.Group widths='equal'>
              <Form.Field>
                <Checkbox
                  radio
                  label='Work (25 min)'
                  name='checkboxRadioGroup'
                  value='work'
                  checked={this.state.value === 'work'}
                  onChange={this.handleCheckboxChange}
                />
              </Form.Field>
              <Form.Field>
                <Checkbox
                  radio
                  label='Short Brake (5 min)'
                  name='checkboxRadioGroup'
                  value='short_brake'
                  checked={this.state.value === 'short_brake'}
                  onChange={this.handleCheckboxChange}
                />
              </Form.Field>
              <Form.Field>
                <Checkbox
                  radio
                  label='Long Brake (10 min)'
                  name='checkboxRadioGroup'
                  value='long_brake'
                  checked={this.state.value === 'long_brake'}
                  onChange={this.handleCheckboxChange}
                />
              </Form.Field>
            </Form.Group>
          </Form>
          <Divider horizontal>Controls</Divider>
          <ClockControls controlState={this.state.controlState} onChangeControlState={this.changeClockState}/>
        </Segment>
      </div>
    )
  }
}

export default Timer;
