import React, { Component } from 'react'
import { Divider, Header } from 'semantic-ui-react'

import './Settings.css'

class Settings extends Component {
  render() {
    return(
      <div className='settings'>
        <Header color='red' size='huge'>Tomaat</Header>
        <Divider horizontal>Settings</Divider>
      </div>
    )
  }
}

export default Settings
