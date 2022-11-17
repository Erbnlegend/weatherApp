import { getWeatherData } from './requests/weatherAPI'

const DOMElements = {
  submitLocation: document.getElementById('submitLocation'),
  enteredCity: document.getElementById('enteredCity'),
  enteredCountry: document.getElementById('enteredCountry'),
  unit: document.getElementById('unit'),
  error: document.getElementById('error'),
  render: document.getElementById('searchOptions')
}

function clear () {
  const renderClear = [...document.querySelectorAll('.card')]
  renderClear.forEach(element => {
    element.remove()
  })
  DOMElements.error.innerHTML = ''
}

function addCardEvents () {
  const cardEvents = [...document.querySelectorAll('.card')]
  cardEvents.forEach(element => {
    element.addEventListener('click', function (e) {
      const state = e.target.dataset.state
      const JSONCoords = e.target.dataset.coords
      const coords = JSON.parse(JSONCoords)
      getWeatherData(coords, state)
    })
  })
}

function renderHTML (weatherData, template) {
  DOMElements.enteredCity.setAttribute('placeholder', weatherData.name)
  DOMElements.enteredCountry.setAttribute('placeholder', weatherData.sys.country)
  const render = document.getElementById('appendWeatherData')
  render.innerHTML = template
}

export { DOMElements, clear, addCardEvents, renderHTML }
