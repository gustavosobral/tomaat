import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Checkbox, Form } from 'semantic-ui-react'

import './TimerTypes.css'

class TimerTypes extends Component {
  render() {
    return(
      <Form className='timer-types'>
        <Form.Group widths='equal'>
          <Form.Field>
            <Checkbox
              radio
              label='Work (25 min)'
              name='timerTypesRadioGroup'
              value='work'
              checked={this.props.timerType === 'work'}
              onChange={this.props.onChange}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox
              radio
              label='Short Break (5 min)'
              name='timerTypesRadioGroup'
              value='short_brake'
              checked={this.props.timerType === 'short_brake'}
              onChange={this.props.onChange}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox
              radio
              label='Long Break (10 min)'
              name='timerTypesRadioGroup'
              value='long_brake'
              checked={this.props.timerType === 'long_brake'}
              onChange={this.props.onChange}
            />
          </Form.Field>
        </Form.Group>
      </Form>
    )
  }
}

TimerTypes.propTypes = {
  timerType: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default TimerTypes
