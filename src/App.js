import React, { Component } from 'react';
import Forms from './components/forms';
import './App.css';
const fetch = require('node-fetch')

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: null,
      country: null,
      
    }
  }


  render() {
    return (
      <div>
        <h1>Weather app</h1>
        <Forms />
      </div>
    )
  }
}

export default App;
