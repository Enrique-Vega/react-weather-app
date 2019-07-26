const fetch = require ('node-fetch')

async function getWeather = (city) => {
        const response = 
        await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=2682d0557556bc51af2a740fcc2e5e49`)    
        const data = await response.json()
        response 
        console.log(data);
        return data
        
      }

// testing api call
getWeather('tecate')