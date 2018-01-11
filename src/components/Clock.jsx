import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Clock.css';

class Clock extends Component {
  renderMinute(timer) {
    return this.formatTime(this.calculateMinute(timer))
  }

  renderSecond(timer) {
    return this.formatTime(this.calculateSecond(timer))
  }

  calculateMinute(timer) {
    return Math.floor(timer / 60)
  }

  calculateSecond(timer) {
    return timer % 60
  }

  formatTime(unit) {
    return unit < 10 ? `0${unit}` : unit
  }

  render() {
    return (
      <h1 className='clock'>
        { this.renderMinute(this.props.timer) }
        :
        { this.renderSecond(this.props.timer) }
      </h1>
    )
  }
}

Clock.propTypes = {
  timer: PropTypes.number.isRequired
};

export default Clock;
