import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Divider, Header } from 'semantic-ui-react'

import Clock from './Clock'
import ClockControls from './ClockControls'
import TimerTypes from './TimerTypes'

import './Timer.css'

class Timer extends Component {
  constructor(props) {
    super(props)

    this.state={
      timer: 0,
      timerLimit: 1500,
      clockState: 'start',
      timerType: 'work',
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
    this.handleTimerTypeChange     = this.handleTimerTypeChange.bind(this)
  }

  handleTimerTypeChange(e, { value }) {
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
    this.setState({ timerType: value })
  }

  soundAlarm() {
    this.state.alarmAudio.play()
    this.props.changeNotificationState(true)
  }

  startClock() {
    this.setState({timer: 0, clockState: 'started', interval: setInterval(this.checkAndIncrementTimer, 1000)})
    this.props.changeNotificationState(false)
  }

  resumeClock() {
    this.setState({clockState: 'started', interval: setInterval(this.checkAndIncrementTimer, 1000)})
  }

  pauseClock() {
    this.setState({clockState: 'paused'})
    clearInterval(this.state.interval)
  }

  stopClock() {
    this.setState({timer: 0, clockState: 'start'})
    this.props.changeNotificationState(false)
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

  render() {
    return (
      <div className='timer'>
        <Header color='red' size='huge'>Tomaat</Header>
        <Divider horizontal>Clock</Divider>
        <Clock timer={this.state.timer}/>
        <Divider horizontal>Timer Type</Divider>
        <TimerTypes timerType={this.state.timerType} onChange={this.handleTimerTypeChange}></TimerTypes>
        <Divider horizontal>Controls</Divider>
        <ClockControls clockState={this.state.clockState} onChange={this.changeClockState}/>
      </div>
    )
  }
}

TimerTypes.propTypes = {
  changeNotificationState: PropTypes.func
}

export default Timer
