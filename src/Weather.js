import React from 'react'


// destructure props from api call state
const Weather = ({ description, city, error, temperature }) => {

  // console.log('sunny:', sunny)

  //algorithm to match keywords with weather description
  //weather descirption converts into an array of string to be 
  //iterated individually per each word
  //return image if keywords are included

  function matchValues() {
    if (description) {
      const weatherDescription = description.split(' ')
      const cloudy = ['cloudy', 'clouds', 'cloud', 'overcast']
      const sunny = ['clear', 'sunshine', 'sunny']
      const rain = ['rain', 'drizzle', 'storms', 'thunderstorms']
      const fog = ['fog', 'foggy', 'hazy', 'mist', 'smog']
      const snow = ['snow', 'flurries', 'sleet']
      for (let i = 0; i < weatherDescription.length; i++) {
        if (cloudy.includes(weatherDescription[i])) {
          return <img style={{ position: 'fixed', left: 0, top: 0, zIndex: -1, width: '420px', height: '825px', backgroundSize: 'contain' }} src='https://media.freestocktextures.com/cache/74/8b/748ba3fe5976d8b03219a64851d2790d.jpg' alt='overcast' />
        } else if (sunny.includes(weatherDescription[i])) {
          return <img style={{ position: 'fixed', left: 0, top: 0, zIndex: -1, width: '420px', height: '825px', backgroundSize: 'contain' }} src={require('./images/sunny.jpg')} alt='sunny sky' />
        } else if (rain.includes(weatherDescription[i])) {
          return <img style={{ position: 'fixed', left: 0, top: 0, zIndex: -1, width: '420px', height: '825px', backgroundSize: 'contain' }} src={require('./images/rain.jpg')} alt='rain on window' />
        } else if (fog.includes(weatherDescription[i])) {
          return <img style={{ position: 'fixed', left: 0, top: 0, zIndex: -1, width: '420px', height: '825px', backgroundSize: 'contain' }} src={require('./images/foggy.jpeg')} alt='fog in hills' />
        } else if (snow.includes(weatherDescription[i])) {
          return <img style={{ position: 'fixed', left: 0, top: 0, zIndex: -1, width: '420px', height: '825px', backgroundSize: 'contain' }} src={require('./images/snow.jpg')} alt='snow' />
        }
      }
    }
  }

  return (

    <div style={{ fontSize: '2.9em', fontFamily: 'Amatic SC, cursive', color: 'black', fontWeight: 700 }} >

      {temperature && <p>{temperature}  °F</p>}
      {description && <p> Conditions: {description}</p>}
      {error && <p>{error}</p>}
      {description && matchValues()}
    </div >
  )
}

export default Weather;