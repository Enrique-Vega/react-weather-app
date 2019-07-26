import React, { Component } from 'react';
import Forms from './components/forms';
import Weather from './components/weather'
import './App.css';
const fetch = require('node-fetch')

class App extends Component {

  render() {
    return (
      <div>
        <h1>Weather app</h1>
        <Forms />
        <Weather />
      </div>
    )
  }
}

export default App;
