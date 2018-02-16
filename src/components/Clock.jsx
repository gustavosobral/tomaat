import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import './Clock.css'

class Clock extends Component {
  calculateMinute = (timer) => Math.floor(timer / 60)

  calculateSecond = (timer) => timer % 60

  formatTime = (unit) => unit < 10 ? `0${unit}` : unit

  renderTimer = (timer) => `${this.formatTime(this.calculateMinute(timer))}:${this.formatTime(this.calculateSecond(timer))}`

  renderHeader = (timer) => {
    return (
      <Helmet>
        <title>Tomaat ({ this.renderTimer(timer) })</title>
      </Helmet>
    )
  }

  render() {
    return (
      <h1 className='clock'>
        { this.renderTimer(this.props.timer) }
        { this.renderHeader(this.props.timer) }
      </h1>
    )
  }
}

Clock.propTypes = {
  timer: PropTypes.number.isRequired
}

export default Clock;
