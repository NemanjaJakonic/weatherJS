class UI {
  constructor() {
    this.location = document.getElementById('w-location')
    this.desc = document.getElementById('w-desc')
    this.string = document.getElementById('w-string')
    this.details = document.getElementById('w-details')
    this.icon = document.getElementById('w-icon')
    this.humidity = document.getElementById('w-humidity')
    this.minTemp = document.getElementById('w-min-temp')
    this.maxTemp = document.getElementById('w-max-temp')
    this.wind = document.getElementById('w-wind')
    this.pressure = document.getElementById('w-pressure')

  }

  paint(weather) {
    this.location.textContent = weather.name + ', ' + weather.sys.country;
    this.desc.textContent = weather.weather[0].description;
    this.string.textContent = Math.round(weather.main.temp) + ' °C';
    this.icon.setAttribute('src', 'http://openweathermap.org/img/wn/'+ weather.weather[0].icon+ '@2x.png' );
    this.humidity.textContent = `Humidity : ${weather.main.humidity} %`;
    this.pressure.textContent = `Pressure : ${weather.main.pressure} mbar`
    this.minTemp.textContent = 'Minimal Temperature : ' + Math.round(weather.main.temp_min) + ' °C';
    this.maxTemp.textContent = 'Maximal Temperature : ' + Math.round(weather.main.temp_max) + ' °C';
    this.wind.textContent = `Wind speed : ${weather.wind.speed}, Wind degrees : ${weather.wind.deg}`
  }
}