import { renderHTML, renderIcons, renderHumidity, renderSun, updateBackground } from '../dom'
import { weatherIcons } from '../requests/weatherIcons'
import { Thermometer, Sunrise, Sunset, Droplets, Wind, Sun, createElement } from 'lucide'

const thermo = createElement(Thermometer)
const sunSet = createElement(Sunset)
const sunRise = createElement(Sunrise)
const droplets = createElement(Droplets)
const wind = createElement(Wind)
const wind2 = createElement(Wind)
const sun = createElement(Sun)

async function weatherTemplate (weatherData, state) {
  console.log(weatherData)

  const time = currentTime(weatherData.dt, weatherData.timezone)
  const sunRiseTime = currentTime(weatherData.sys.sunrise, weatherData.timezone)
  const sunSetTime = currentTime(weatherData.sys.sunset, weatherData.timezone)
  // Fetch Icons to resolve cookie issue
  const icon = await weatherIcons(weatherData)
  const renderTemplateTop = `<div class='background-container'>
  <div class='time'>${time.hour}:${time.minutes} ${time.ampm}</div>
  <div class='date'>${time.weekday}, ${time.month} ${time.date}</div>
    <div class='container'>
      <div class='wrapper'>
        <div class='location'>${weatherData.name}, ${state} ${weatherData.sys.country}</div>
        <div>
          <div class='temp'>${Math.ceil(weatherData.main.temp)}&#8457</div>
        </div>
        <div class='conditions'>
          <div class='skyCondition'>${weatherData.weather[0].main}</div>
        </div>
        <div class='weatherIcon'>
        <img src='${icon}' alt='Current Weather Conditions'>
      </div>
      </div>
      <div class='infoContainer'>
      <div class='moreInfo'>
        <div id='feelsLike'>
          <div class='feels'><span>${Math.ceil(weatherData.main.feels_like)}&#8457</span><br>Feels like</div>
        </div>
        <div class='infoDisplay'>
          <div class='info'><div class='thermo'></div>High | Low</div>
          <div class='info'><span>${Math.ceil(weatherData.main.temp_max)}&#8457</span>&#160|&#160<span>${Math.ceil(weatherData.main.temp_min)}&#8457</span></div>
          <div class='info'><div class='droplets'></div> Humidity</div>
          <div class='info'>${weatherData.main.humidity}%<div id='humidityBar'><div id='humidityPercent'></div></div></div>
        </div>
      <div class='infoDisplay'>
        <div class='info'><div class='wind'></div>Wind Speed</div>
        <div class='info'><span>${Math.ceil(weatherData.wind.speed)} mph</span></div>
        <div class='info'><div class='windGust'></div>Gusts</div>
        <div class='info'>${Math.ceil(weatherData.wind.gust)} mph</div>
      </div>
      </div>
      <div class='sunInfo'>
        <div class='infoDisplay'>
          <div class='sunIcon'><div class='sunrise'></div>${sunRiseTime.hour}:${sunRiseTime.minutes}</div>
          <div class='sunBar'><div class='sunBarPercent'><div class='sunBarIcon'></div></div></div>
          <div class='sunIcon'><div class='sunset'></div>${sunSetTime.hour}:${sunSetTime.minutes}</div>
        </div>
      </div>
    </div>
  </div>
    </div>
`
  renderHTML(weatherData, renderTemplateTop)
  renderIcons(thermo, sunSet, sunRise, droplets, wind, wind2, sun)
  renderHumidity(weatherData.main.humidity)
  renderSun(sunRiseTime.hour, sunSetTime.hour, time.hour)
  updateBackground(weatherData.main.temp, weatherData.weather[0].main)
}

function currentTime (dtIn, timezone) {
  const dateTime = new Date(dtIn * 1000 + timezone * 1000)

  const hour = (dateTime.getUTCHours() % 24)
  const ampm = hour < 12 ? 'am' : 'pm'

  let minutes = dateTime.getUTCMinutes()
  if (minutes < 10) {
    minutes = `0${minutes}`
  }
  const weekday = dateTime.toLocaleString('default', { timeZone: 'UTC', weekday: 'long' })
  const month = dateTime.toLocaleString('default', { timeZone: 'UTC', month: 'short' })
  const date = dateTime.getUTCDate()

  return {
    weekday,
    month,
    date,
    hour,
    minutes,
    ampm
  }
}

export { weatherTemplate }
