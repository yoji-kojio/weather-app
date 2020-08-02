const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

address ? geocode(address, forecast) : console.log('Please, try again and type an address to search')
