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
      return console.log('Unable to find location. try another search')
    }

    callback({
      longitude: features[0].center[0],
      latitude: features[0].center[1],
      placeName: features[0].place_name,
    })
  }).catch((_error) => {
    return console.log('Unable to connect on Geocoding API')
  })
}

module.exports = geocode
