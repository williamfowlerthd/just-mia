import React, { useState } from 'react';
import './App.css';
import Form from './Form';
import Weather from './Weather';

function App() {
  //set up state and api key
  const [weather, setWeather] = useState([])
  //this api key is no longer working and has been removed as default 
  const APIKEY = '13b3c81c185ca059b8d83aa82e706a7a'
  // async function fetch set state to api call and organize data

  async function fetchData(e) {
    const city = e.target.elements.city.value
    // const country = e.target.elements.country.value
    e.preventDefault()
    const apiData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${APIKEY}`)
      .then(res => res.json())
      .then(data => data)
    if (city) {
      //error handling for input city and country
      setWeather({
        data: apiData,
        city: apiData.city,
        // country: apiData.sys.country,
        description: apiData.weather[0].description,
        temperature: Math.round(apiData.main.temp * 9 / 5 - 459.67),
        error: ""
      }
      )
    } else {
      setWeather({
        data: '',
        city: '',
        // country: '',
        description: '',
        temperature: '',
        error: "Please Type A City"
      }
      )
    }
  }

  return (
    //send props to form and weather and console weather data
    <div className="App">
      <h2 style={{ fontFamily: 'Amatic SC, cursive', fontSize: "3em" }}>Mia's</h2>
      <h2 style={{ fontFamily: 'Amatic SC, cursive', fontSize: "3em" }}>Weather App</h2>
      <Form getWeather={fetchData} />
      <Weather
        city={weather.city}
        // country={weather.country}
        description={weather.description}
        temperature={weather.temperature}
        error={weather.error}
      />
      {console.log(weather.data)}
    </div>
  );
}

export default App;
