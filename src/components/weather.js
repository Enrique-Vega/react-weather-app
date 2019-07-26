import React, { Component } from 'react';

class Weather extends Component {
    constructor(props) {
        super(props);
      }
    
    render() {
    const { city, country, temperature, humidity, description } = this.props
        return (
        <div>
            <ul>
                <li>City: {city}</li>
                <li>Country: {country}</li>
                <li>Temperature: {temperature}</li>
                <li>Humidity: {humidity}</li>
                <li>Description: {description}</li>
            </ul>
        </div>
        )
    }
}

export default Weather;
