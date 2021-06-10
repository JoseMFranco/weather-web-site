const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const msgOne = document.querySelector('#msg1')
const msgTwo = document.querySelector('#msg2')

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const location = search.value

  msgOne.textContent = 'Loading...'
  msgTwo.textContent = ''

  fetch('/weather?address=' + location).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        msgOne.textContent = ''
        msgTwo.textContent = data.error
        //console.log(data.error)
      } else {
        msgOne.textContent = 'Location: ' + data.location
        msgTwo.textContent = 'Forecast: ' + data.forecast
        //console.log(data.location)
        //console.log(data.forecast)
      }
    })
  })
})
