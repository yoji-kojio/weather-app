const axios = require('axios')
require('dotenv').config()

const hostUrl = 'http://api.weatherstack.com/current'
const params = {
  access_key: process.env.WEATHER_API_KEY,
  query: 'Sao Jose dos Campos'
}

axios.get(hostUrl, { params }).then(({ data }) => {
  console.log(data.current)
}).catch((error) => {
  console.log(error)
})
