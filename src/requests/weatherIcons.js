async function weatherIcons (weatherData) {
  const response = await fetch(`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`, { credentials: 'omit' })
  const urlObj = response
  const url = urlObj.url
  return url
}

export { weatherIcons }
