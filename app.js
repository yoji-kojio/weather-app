const axios = require('axios')
const { geocode } = require('./utils/geocode')

const log = console.log

const weatherApiUrl = 'http://api.weatherstack.com/current'
const weatherApiParams = {
  access_key: process.env.WEATHER_API_KEY,
  query: 'Pocos de Caldas'
}

axios.get(weatherApiUrl, { params: weatherApiParams }).then(({ data }) => {
  const { temperature, feelslike, weather_descriptions } = data.current

  log(weather_descriptions[0] + '. Its is currently ' + temperature + ' degress out. It feels like ' + feelslike + ' degress out.')
}).catch((_error) => {
  log('Unable to connect on Weather API')
})

geocode('Sao Jose dos Campos', (response) => {
  console.log(response)
})
