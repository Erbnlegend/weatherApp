import { DOMElements } from './dom'
import { weatherTemplate } from './template/weatherTemplate'

// 'https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid=dff09f416b1eecab3a6dac32139cf593'
// Get API data
async function getWeatherData (position1, position2, units) {
  if (!isNaN(position1)) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${position1}&lon=${position2}&units=${units}&APPID=dff09f416b1eecab3a6dac32139cf593`,
        {
          mode: 'cors'
        })
      const weatherData = await response.json()
      weatherTemplate(weatherData)
    } catch (error) {
      console.log(error)
    }
  }
  if (typeof position1 === 'string') {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${position1},${position2}&units=${units}&APPID=dff09f416b1eecab3a6dac32139cf593`,
        {
          mode: 'cors'
        })
      const weatherData = await response.json()
      weatherTemplate(weatherData)
    } catch (error) {
      console.log(error)
      DOMElements.error.innerHTML = 'Something with your search went wrong. Please try again'
    }
  }
}

// Export data for FUNctions
export { getWeatherData }
