const axios = require('axios')
require('dotenv').config()

const log = console.log

const weatherApiUrl = 'http://api.weatherstack.com/current'
const weatherApiParams = {
  access_key: process.env.WEATHER_API_KEY,
  query: 'Pocos de Caldas'
}

axios.get(weatherApiUrl, { params: weatherApiParams }).then(({ data }) => {
  const { temperature, feelslike, weather_descriptions } = data.current

  log(weather_descriptions[0] + '. Its is currently ' + temperature + ' degress out. It feels like ' + feelslike + ' degress out.')
}).catch((error) => {
  log('Unable to connect on Weather API')
})

const mapboxApiUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json'
const mapboxApiParams = {
  access_token: process.env.MAPBOX_API_KEY,
  limit: 1
}

axios.get(mapboxApiUrl, { params: mapboxApiParams }).then(({ data }) => {
  const { features } = data

  if (features && features.length === 0) {
    log('Unable to find location. try another search')
    return
  }

  const longitude = features[0].center[0]
  const latitude = features[0].center[1]

  log(latitude, longitude)
}).catch((error) => {
  log('Unable to connect on Geocoding API')
})
