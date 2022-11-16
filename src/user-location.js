import { getWeatherData } from './weatherAPI'
import { DOMElements } from './dom'

function userLocation () {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showUserPosition)
  } else {
    DOMElements.error.innerHTML = 'You have disabled Location or is otherwise incapacitated'
  }
}

function showUserPosition (position) {
  console.log(`Latitude: ${position.coords.latitude} Longitude: ${position.coords.longitude}`)
  const latitude = position.coords.latitude
  const longitude = position.coords.longitude
  const units = 'imperial'
  getWeatherData(latitude, longitude, units)
}

export { userLocation }
