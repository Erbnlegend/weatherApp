import { createIcons, CloudMoonRain, createElement } from 'lucide'
import { DOMElements } from '../dom'

createIcons({
  icons: {
    CloudMoonRain
  }
})
const icon = createElement(CloudMoonRain)
icon.setAttribute('class', 'icon')
function weatherTemplate (weatherData) {
  console.log(weatherData)
  const renderTemplate = `<div class='background-container'>
    <div class='container'>
      <div class='wrapper'>
        <div class='location'>${weatherData.name}, ${weatherData.sys.country}</div>
        <div class='temp'>
          <div>${weatherData.main.temp}</div>
        </div>
        <div class='conditions'>
          <div class='skyCondition'>${weatherData.weather[0].main}<br>${weatherData.weather[0].description}</div>
        </div>
      </div>
      <div class='weatherIcon'></div>
    </div>
  </div>`

  DOMElements.enteredCity.setAttribute('placeholder', weatherData.name)
  DOMElements.enteredCountry.setAttribute('placeholder', weatherData.sys.country)
  const render = document.getElementById('appendWeatherData')
  render.innerHTML = renderTemplate

  const weatherIcon = document.querySelector('.weatherIcon')
  weatherIcon.append(icon)
}

export { weatherTemplate }
