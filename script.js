function getWeather() {
  const city = document.getElementById("city").value;
  const apiKey = "60b9b758e7b0fbc8a08df95e1ad67031";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.cod === "404") {
        document.getElementById("weatherResult").innerHTML = "City not found!";
        return;
      }

      const result = `
        <h3>${data.name}, ${data.sys.country}</h3>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
      `;

      document.getElementById("weatherResult").innerHTML = result;
    })
    .catch(error => {
      document.getElementById("weatherResult").innerHTML = "Error fetching data.";
    });
}
