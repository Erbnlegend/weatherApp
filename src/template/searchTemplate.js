import { addCardEvents, clear, DOMElements } from '../dom'

async function searchTemplate (geoData) {
  clear()
  for (let i = 0; i < geoData.length; i++) {
    const renderTemplate = `
    <div class='card' data-state='${geoData[i].state}' data-coords='{"lat":${geoData[i].lat}, "lon": ${geoData[i].lon}}'>
    ${geoData[i].name}, ${geoData[i].state} ${geoData[i].country}
    </div>`

    const createDiv = document.createElement('div')
    renderTemplate.trim()
    createDiv.innerHTML = renderTemplate
    DOMElements.render.append(createDiv)
  }
  DOMElements.error.innerHTML = 'Did you mean this:'
  addCardEvents()
}

export { searchTemplate }
