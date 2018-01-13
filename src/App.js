import React, { Component } from 'react'
import Timer from './components/Timer'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Timer className='timer'></Timer>
      </div>
    )
  }
}

export default App
