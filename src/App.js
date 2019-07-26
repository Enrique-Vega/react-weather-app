import React, { Component } from 'react';
import Forms from './components/forms';
import './App.css';

class App extends Component {
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
