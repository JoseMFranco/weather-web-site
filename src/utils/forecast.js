const request = require('postman-request')

const forecast = (lat, long, callback) => {
  const url = "http://api.weatherstack.com/current?access_key=c2578403378f17002247ebbd841a75bb&query=" + lat + "," + long + "&units=m"

  request({url, json: true}, (error, { body }) => {
    if (error) {
      callback("Unable to connect to the weather service!", undefined)
    } else if (body.error) {
      callback("Unable to get the forecast data", undefined)
    } else {
      data = body.current
      callback(undefined, data.weather_descriptions[0] + ". It's currently " + data.temperature + " but it feels like " +  data.feelslike)
    }
  })
}

module.exports = forecast
