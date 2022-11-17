import { getWeatherData } from './requests/weatherAPI'
import { DOMElements } from './dom'

function userLocation () {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showUserPosition)
  } else {
    DOMElements.error.innerHTML = 'You have disabled Location or is otherwise incapacitated'
  }
}

function showUserPosition (showUserPosition) {
  console.log(`Latitude: ${showUserPosition.coords.latitude} Longitude: ${showUserPosition.coords.longitude}`)
  const latitude = showUserPosition.coords.latitude
  const longitude = showUserPosition.coords.longitude
  const position = { lat: latitude, lon: longitude }
  const state = ''
  getWeatherData(position, state)
}

export { userLocation }
