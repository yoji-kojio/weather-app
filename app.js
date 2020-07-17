const axios = require('axios')
require('dotenv').config()

const log = console.log
const hostUrl = 'http://api.weatherstack.com/current'
const params = {
  access_key: process.env.WEATHER_API_KEY,
  query: 'Pocos de Caldas'
}

axios.get(hostUrl, { params }).then(({ data }) => {
  const { temperature, feelslike, weather_descriptions } = data.current

  log(weather_descriptions[0] + '. Its is currently ' + temperature + ' degress out. It feels like ' + feelslike + ' degress out.')
}).catch((error) => {
  log(error)
})
