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
// Weather Template Calls this
function renderHTML (weatherData, template) {
  DOMElements.enteredCity.setAttribute('placeholder', weatherData.name)
  DOMElements.enteredCountry.setAttribute('placeholder', weatherData.sys.country)
  const render = document.getElementById('appendWeatherData')
  render.innerHTML = template
}
// Weather Template Calls this
function renderIcons (thermo, sunSet, sunRise, droplets, wind, wind2, sun) {
  const highLow = document.querySelector('.thermo')
  const humidity = document.querySelector('.droplets')
  const windIcon = document.querySelector('.wind')
  const windGustIcon = document.querySelector('.windGust')
  const sunset = document.querySelector('.sunset')
  const sunrise = document.querySelector('.sunrise')
  const sunIcon = document.querySelector('.sunBarIcon')

  highLow.append(thermo)
  humidity.append(droplets)
  windIcon.append(wind)
  windGustIcon.append(wind2)
  sunset.append(sunSet)
  sunrise.append(sunRise)
  sunIcon.append(sun)
}
// Weather Template Calls this
function renderHumidity (humidity) {
  const percent = document.getElementById('humidityPercent')
  // Simple Width Transition set in
  for (let i = 0; i <= humidity; i++) {
    setTimeout(() => {
      percent.style.width = `${i}%`
    }, 50)
  }
}
// Weather Template Calls this
function renderSun (riseTime, setTime, currentTime) {
  const bar = document.querySelector('.sunBarPercent')
  const barIcon = document.querySelector('.sunBarIcon')
  let baseLine = 0
  const difference = setTime - riseTime
  if (currentTime > riseTime && currentTime < setTime) {
    barIcon.style.color = '#ff4500'
  }
  for (let i = riseTime; i <= currentTime; i++) {
    if (currentTime < riseTime) {
      bar.style.width = '0%'
      barIcon.style.left = '0'
      return
    }
    baseLine++
    riseTime++
    if (currentTime >= setTime) {
      for (let i = 0; i <= 100; i++) {
        setTimeout(() => {
          bar.style.width = `${i}%`
          barIcon.style.left = `${i - 3}%`
          bar.style.backgroundColor = '#ffffff'
        }, 50)
      }
      return
    }
    const percent = (baseLine / difference) * 100
    setTimeout(() => {
      bar.style.width = `${percent}%`
      barIcon.style.left = `${percent + 5}%`
    }, 50)
    if (percent >= 100) {
      bar.style.backgroundColor = '#ffffff'
      barIcon.style.color = '#ffffff'
    }
  }
}
// Weather Template Calls this
function updateBackground (temp, condition) {
  const background = document.querySelector('.background')
  background.style.backgroundImage = `url(${conditionsMatch[condition]})`
}
// Data used by background checker
const conditionsMatch = {
  Clear: 'imgs/ritam-baishya-ROVBDer29PQ-unsplash.jpg',
  Clouds: 'imgs/billy-huynh-v9bnfMCyKbg-unsplash.jpg',
  Thunderstorm: 'imgs/johannes-plenio-ESL1rIs9j48-unsplash.jpg',
  Drizzle: 'imgs/filip-zrnzevic-_EMkxLdko9k-unsplash.jpg',
  Rain: 'imgs/roman-synkevych-qPvBmSvmohs-unsplash.jpg',
  Snow: 'imgs/rye-jessen-GLOJ4NRWAyU-unsplash.jpg',
  Mist: 'imgs/annie-spratt-7CME6Wlgrdk-unsplash.jpg',
  Smoke: 'imgs/corina-rainer-jZc5eTXnYLU-unsplash.jpg',
  Haze: 'imgs/alex-gindin-ifpBOcQlhoY-unsplash.jpg',
  Dust: 'imgs/jessica-knowlden-Alkq_ht0GVk-unsplash.jpg',
  Fog: 'imgs/paul-pastourmatzis-KT3WlrL_bsg-unsplash.jpg',
  Sand: 'imgs/wolfgang-hasselmann-Fd01B6nNPbo-unsplash.jpg',
  Ash: 'imgs/william-krause-wPsDfkS_noU-unsplash.jpg',
  Squall: 'imgs/khamkeo-vilaysing-WtwSsqwYlA0-unsplash.jpg',
  Tornado: 'imgs/nikolas-noonan-fQM8cbGY6iQ-unsplash.jpg'
}

// Submit Search Form
DOMElements.enteredCountry.addEventListener('input', function (e) {
  const string = DOMElements.enteredCountry.value
  const setStringLength = string.length
  if (setStringLength > 2) {
    DOMElements.error.innerHTML = 'Country can only accept two characters!'
  } else {
    DOMElements.error.innerHTML = ''
  }
})

export { DOMElements, clear, addCardEvents, renderHTML, renderIcons, renderHumidity, renderSun, updateBackground }
