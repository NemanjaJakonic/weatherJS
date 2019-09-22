class Weather {
  constructor(city) {
    this.apiKey = 'd83b83e996bd735c50900e6c20afe31f';
    this.city = city;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch (`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=metric`)

    const responseData = await response.json();

    return  responseData;
  }

  changeLocation(city){
    this.city = city;
  }
}