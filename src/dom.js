import { getWeatherData } from './requests/weatherAPI'

const DOMElements = {
  submitSearch: document.getElementById('submitSearch'),
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
function renderIcons (thermo, sunSet, sunRise, droplets, wind, wind2) {
  const highLow = document.querySelector('.thermo')
  const humidity = document.querySelector('.droplets')
  const windIcon = document.querySelector('.wind')
  const windGustIcon = document.querySelector('.windGust')
  const sunset = document.querySelector('.sunset')
  const sunrise = document.querySelector('.sunrise')

  highLow.append(thermo)
  humidity.append(droplets)
  windIcon.append(wind)
  windGustIcon.append(wind2)
  sunset.append(sunSet)
  sunrise.append(sunRise)
}
function renderHumidity (humidity) {
  const percent = document.getElementById('humidityPercent')

  for (let i = 0; i <= humidity; i++) {
    setTimeout(() => {
      percent.style.width = `${i}%`
    }, 10)
  }
}

DOMElements.enteredCountry.addEventListener('input', function (e) {
  const string = DOMElements.enteredCountry.value
  const setStringLength = string.length
  if (setStringLength > 2) {
    DOMElements.error.innerHTML = 'Country can only accept two characters!'
  } else {
    DOMElements.error.innerHTML = ''
  }
})

export { DOMElements, clear, addCardEvents, renderHTML, renderIcons, renderHumidity }
