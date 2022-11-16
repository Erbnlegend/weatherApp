import './style.css'
import { DOMElements } from './dom'
import { userLocation } from './user-location'
import { getWeatherData } from './weatherAPI'

userLocation()

DOMElements.submitLocation.addEventListener('click', function (e) {
  e.preventDefault()
  const enteredCity = DOMElements.enteredCity.value
  const enteredCountry = DOMElements.enteredCountry.value
  const unit = 'imperial'
  getWeatherData(enteredCity, enteredCountry, unit)
})
