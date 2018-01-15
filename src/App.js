import React, { Component } from 'react'
import { Segment, Message, Menu } from 'semantic-ui-react'

import Settings from './components/Settings'
import Timer from './components/Timer'

import './App.css'

class App extends Component {
  state = { activeMenuItem: 'timer', hasNotification: false }

  handleMenuClick = (e, { name }) => this.setState({ activeMenuItem: name })

  handleNotificationDismiss = () => this.setState({hasNotification: false})

  changeNotificationState = (newNotificationState) => this.setState({hasNotification: newNotificationState})

  renderNotification = () => {
    return(
      <Message positive
        onDismiss={this.handleNotificationDismiss}
        icon='clock'
        header='You time is complete!'
      />
    )
  }

  render() {
    const { activeMenuItem, hasNotification } = this.state

    return (
      <div className='app'>
        <div className='tomaat'>
          { hasNotification && this.renderNotification() }

          { activeMenuItem === 'timer' && <Segment>
            <Timer className='timer' changeNotificationState={this.changeNotificationState}></Timer>
          </Segment> }
          { activeMenuItem === 'settings' && <Segment>
            <Settings></Settings>
          </Segment> }

          <Menu fluid widths={2}>
            <Menu.Item name='timer' active={activeMenuItem === 'timer'} onClick={this.handleMenuClick}>
              Timer
            </Menu.Item>

            <Menu.Item name='settings' active={activeMenuItem === 'settings'} onClick={this.handleMenuClick}>
              Settings
            </Menu.Item>
          </Menu>
        </div>
      </div>
    )
  }
}

export default App
