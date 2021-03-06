import React, { Component } from 'react'
import Bingo from './Bingo'
import Motto from './Motto'

import './App.css'
import logo from './logo.svg'

class App extends Component {
  render() {
    return (
      <div className="app">
        <img src={logo} className="logo" alt="logo" />
        <h4>Refresh page or click Redraw</h4>
        <div className="container">
          <Bingo />
          <Motto />
        </div>
      </div>
    )
  }
}

export default App
