const API_KEY = '0fe8d0974e55e2e9b3bc04c7b864501b'

function onGeoOk(position) {
  const lat = position.coords.latitude
  const lon = position.coords.longitude
  //weather API 불러오기
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector('#weather span:first-child')
      const city = document.querySelector('#weather span:last-child')

      city.innerText = data.name
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
    }) //JS가 url요청해서 결과받아옴
}

function onGeoError() {
  alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)
