import { clear } from '../dom'
import { weatherTemplate } from '../template/weatherTemplate'

// 'https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid=dff09f416b1eecab3a6dac32139cf593'
// Get API data
async function getWeatherData (position1, position2) {
  clear()
  const units = 'imperial'
  if (!isNaN(position1.lat)) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${position1.lat}&lon=${position1.lon}&units=${units}&APPID=dff09f416b1eecab3a6dac32139cf593`,
        {
          mode: 'cors'
        })
      const weatherData = await response.json()
      weatherTemplate(weatherData, position2)
    } catch (error) {
      console.log(error)
    }
  }
}

// Export data for FUNctions
export { getWeatherData }
