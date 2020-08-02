require('dotenv').config()
const axios = require('axios')

const forecast = (location) => {
  const weatherApiUrl = 'http://api.weatherstack.com/current'
  const { latitude, longitude, placeName } = location
  const weatherApiParams = {
    access_key: process.env.WEATHER_API_KEY,
    query: `${latitude},${longitude}`,
  }

  axios.get(weatherApiUrl, { params: weatherApiParams }).then(({ data }) => {
    if (!data.current) {
      return console.log('Unable to find location')
    }

    const { temperature, feelslike, weather_descriptions } = data.current

    console.log(placeName)
    console.log(weather_descriptions[0] + '. Its is currently ' + temperature + ' degress out. It feels like ' + feelslike + ' degress out.')
  }).catch((_error) => {
    console.log('Unable to connect on Weather API')
  })
}

module.exports = forecast
