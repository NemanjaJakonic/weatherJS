// init storage
const storage = new Storage();

// get stored location data
const weatherLocation = storage.getLocationData()

// Init weather object
const weather = new Weather(weatherLocation.city);
// Init UI
const ui = new UI();

// get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// change location event
document.getElementById('w-change-btn').addEventListener('click', (e)=>{
  const city = document.getElementById('city').value;

  //change location
  weather.changeLocation(city);

  //set location in LS
  storage.setLocationData(city);

  // get and display weather
  getWeather();
  console.log(city)

  //Close modal
  $('#locModal').modal('hide');
});

function getWeather(){
weather.getWeather()
  .then(results=>{
    ui.paint(results);
  }
    )
  .catch(err=> console.log(err));
}

