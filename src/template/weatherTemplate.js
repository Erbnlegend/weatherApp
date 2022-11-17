import { renderHTML } from '../dom'
import { weatherIcons } from '../requests/weatherIcons'

async function weatherTemplate (weatherData, state) {
  console.log(weatherData)
  // Fetch Icons to resolve cookie issue
  const icon = await weatherIcons(weatherData)
  const renderTemplateTop = `<div class='background-container'>
    <div class='container'>
      <div class='wrapper'>
        <div class='location'>${weatherData.name}, ${state} ${weatherData.sys.country}</div>
        <div>
          <div class='temp'>${Math.ceil(weatherData.main.temp)}</div>
          <div class='small'>Feels like ${Math.ceil(weatherData.main.feels_like)}</div>
        </div>
        <div class='conditions'>
          <div class='skyCondition'>${weatherData.weather[0].main}</div>
        </div>
      </div>
      <div class='weatherIcon'>
        <img src='${icon}' alt=''>
      </div>
    </div>
    <div id='moreInfo'>
      <div class='minMaxTemp'>High<span>${Math.ceil(weatherData.main.temp_max)}</span></div>
      <div class='minMaxTemp'>Low<span>${Math.ceil(weatherData.main.temp_min)}</span></div>
      <div id='humidity'>
        <div data-humidity='${weatherData.main.humidity}'>${weatherData.main.humidity}</div>
      </div>
    </div>
  </div>
`

  renderHTML(weatherData, renderTemplateTop)
}

export { weatherTemplate }
