require('dotenv').config()
const axios = require('axios')

const geocode = (address, callback) => {
  const encodedAddress = encodeURIComponent(address)
  const mapboxApiUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodedAddress}.json`
  const mapboxApiParams = {
    access_token: process.env.MAPBOX_API_KEY,
    limit: 1
  }

  axios.get(mapboxApiUrl, { params: mapboxApiParams }).then(({ data }) => {
    const { features } = data

    if (features && features.length === 0) {
      callback('Unable to find location. try another search')
      return
    }

    const longitude = features[0].center[0]
    const latitude = features[0].center[1]

    callback(`${latitude}, ${longitude}`)
  }).catch((_error) => {
    callback('Unable to connect on Geocoding API')
  })
}

module.exports = {
  geocode
}
