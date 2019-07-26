import React, { Component } from 'react';
import axios from 'axios';
// const fetch = require ('node-fetch')
class Forms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            data: [],
            city: undefined,
            country: undefined,
            temperature: undefined,
            humidity: undefined,
            description: undefined         
        }
    }

    // ________________ getting weather data using node-fetch async/await__________________
    // async getWeather() {
    //     const { value } = this.state
    //         const response = 
    //         await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${value}&units=imperial&appid=2682d0557556bc51af2a740fcc2e5e49`)    
    //         const data = await response.json()
    //             this.setState({
    //                 city: data.name,
    //                 country: data.sys.country,
    //                 temperature: data.main.temp,
    //                 humidity: data.main.humidity
    //             })
    //         // sets state according to data
    // }

    async componentWillMount() {
        const res =
        await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&units=imperial&appid=2682d0557556bc51af2a740fcc2e5e49`)
                const data = await res.data;
                console.log(data);          
                this.setState({
                    city: data.name,
                    country: data.sys.country,
                    temperature: data.main.temp,
                    humidity: data.main.humidity
                })
    }

    handleChange = (e) => {
        this.setState({ value: e.target.value })
    }

    handleSubmit = (e) => {
        // this.getWeather()
        this.componentWillMount()
        console.log('A city was submitted ' + this.state.value);
        e.preventDefault();
    }

  render() {
    const { city, country, temperature, humidity, value } = this.state    
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    name="city" 
                    placeholder="City.." 
                    value={value} 
                    onChange={this.handleChange}
                />
                <button>Get Weather</button>
            </form> 
            <div>
                <ul>
                    <li>City: {city}</li>
                    <li>Country: {country}</li>
                    <li>Temperature: {temperature}</li>
                    <li>Humidity: {humidity}</li>
                </ul>
            </div>
        </div>

    )
  }
}

export default Forms;
