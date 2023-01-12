import './style.css'
import './index.html'
import './assets/thermometer-sun.png'
import { DOMElements } from './dom'
import { userLocation } from './user-location'
import { geoSearch } from './requests/geoSearch'

import './assets/ritam-baishya-ROVBDer29PQ-unsplash.jpg'
import './assets/billy-huynh-v9bnfMCyKbg-unsplash.jpg'
import './assets/johannes-plenio-ESL1rIs9j48-unsplash.jpg'
import './assets/filip-zrnzevic-_EMkxLdko9k-unsplash.jpg'
import './assets/roman-synkevych-qPvBmSvmohs-unsplash.jpg'
import './assets/rye-jessen-GLOJ4NRWAyU-unsplash.jpg'
import './assets/annie-spratt-7CME6Wlgrdk-unsplash.jpg'
import './assets/corina-rainer-jZc5eTXnYLU-unsplash.jpg'
import './assets/alex-gindin-ifpBOcQlhoY-unsplash.jpg'
import './assets/jessica-knowlden-Alkq_ht0GVk-unsplash.jpg'
import './assets/paul-pastourmatzis-KT3WlrL_bsg-unsplash.jpg'
import './assets/wolfgang-hasselmann-Fd01B6nNPbo-unsplash.jpg'
import './assets/william-krause-wPsDfkS_noU-unsplash.jpg'
import './assets/khamkeo-vilaysing-WtwSsqwYlA0-unsplash.jpg'
import './assets/nikolas-noonan-fQM8cbGY6iQ-unsplash.jpg'

userLocation()

DOMElements.submitSearch.addEventListener('submit', function (e) {
  e.preventDefault()
  const enteredCity = DOMElements.enteredCity.value
  const enteredCountry = DOMElements.enteredCountry.value
  geoSearch(enteredCity, enteredCountry)
})
