import { DOMElements } from '../dom'
import { searchTemplate } from '../template/searchTemplate'

// 'https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid=dff09f416b1eecab3a6dac32139cf593'
// Get API data
async function geoSearch (position1, position2) {
  if (position1 !== '' && position2 === '') {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${position1}&limit=5&APPID=dff09f416b1eecab3a6dac32139cf593`,
        {
          mode: 'cors'
        })
      const geoData = await response.json()
      searchTemplate(geoData)
    } catch (error) {
      console.log(error)
    }
    return
  }
  if (position1 !== '' && position2 !== '') {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${position1},${position2}&limit=5&APPID=dff09f416b1eecab3a6dac32139cf593`,
        {
          mode: 'cors'
        })
      const geoData = await response.json()
      searchTemplate(geoData)
    } catch (error) {
      console.log(error)
      DOMElements.error.innerHTML = error
    }
  }
}

export { geoSearch }
