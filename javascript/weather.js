const apiKEY = `1c8f15eb3265237e7406e9cf21f69d83`;

//gets the users location
navigator.geolocation.getCurrentPosition(
  (position) => {
    const { latitude, longitude } = position.coords;
    getWeather(latitude, longitude);
  },
  (error) => {
    console.error("could not get your location", error);
    document.querySelector(".location").textContent = "Could not get location";
  }
);

// fetching weather api with lat and lon from the json file? to get the lastitude and longitude
function getWeather(lat, lon) {
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKEY}&units=metric`;
  fetch(apiURL)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      displayWeather(data);
    })

    .catch((error) => {
      displayError(error.message);
    });
}

// to display the data from the api to give the specific weather
function displayWeather(data) {
  document.getElementById("error-message").textContent = "";
  document.getElementById("city-name").textContent = `Weather in: ${data.name}`;
  document.getElementById(
    "temp"
  ).textContent = `Tempeture: ${Math.floor(data.main.temp)} C°`;

  document.getElementById(
    "description"
  ).textContent = `Description: ${data.weather[0].description}`;
  document.getElementById("wind").textContent = `Wind: ${data.wind.speed} m/s`;
  document.getElementById(
    "humidity"
  ).textContent = `Humidity: ${data.main.humidity}% `
  document.getElementById("clouds").textContent = `Clouds: ${data.clouds.all}%`;

  const icons = data.weather[0].icon; 
  const iconURL = `https://openweathermap.org/img/wn/${icons}@2x.png`;

  const weatherIcon = document.getElementById("weather-icon");
    weatherIcon.src = iconURL;
    weatherIcon.alt = data.weather[0].description;
    weatherIcon.style.display = "block"; // makes it visible

}

// displays errors if they occur
function displayError(message) {
  document.getElementById("error-message").textContent = message;
  document.getElementById("city-name").textContent = "";
  document.getElementById("temp").textContent = "";
  document.getElementById("description").textContent = "";
  document.getElementById("wind").textContent = "";
  document.getElementById("clouds").textContent = "";
}
