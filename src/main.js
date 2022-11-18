import './style.css'
import './index.html'
import './assets/thermometer-sun.png'
import { DOMElements } from './dom'
import { userLocation } from './user-location'
import { geoSearch } from './requests/geoSearch'

userLocation()

DOMElements.submitSearch.addEventListener('submit', function (e) {
  e.preventDefault()
  const enteredCity = DOMElements.enteredCity.value
  const enteredCountry = DOMElements.enteredCountry.value
  geoSearch(enteredCity, enteredCountry)
})
