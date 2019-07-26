import React, { Component } from 'react';

class Weather extends Component {

    
    render() {
    // const { city, country, temperature, humidity, description } = this.props
        return (
        <div>
            <ul>
                <li>City: {this.props.city}</li>
                <li>Country: {this.props.country}</li>
                <li>Temperature: {this.props.emperature}</li>
                <li>Humidity: {this.props.humidity}</li>
                <li>Description: {this.props.description}</li>
            </ul>
        </div>
        )
    }
}

export default Weather;
