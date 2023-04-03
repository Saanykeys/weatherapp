function getWeather(city) {
    // Enter your API key from OpenWeatherMap
    const apiKey = "8819c76fc201539334589d1035749c88";
    
    // Make a request to the OpenWeatherMap API to get the weather data
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${"8819c76fc201539334589d1035749c88"}`;
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${"8819c76fc201539334589d1035749c88"}`;)
      .then(response => response.json())
      .then(data => {
        // Extract the relevant weather data from the response
        const weather = data.weather[0].description;
        const temperature = data.main.temp;
        const humidity = data.main.humidity;
        
        // Display the weather information
        console.log(`The weather in ${city} is ${weather}. The temperature is ${temperature} and the humidity is ${humidity}%.`);
      })
      .catch(error => {
        console.error("Error retrieving weather data:", error);
      });
  }
  
  getWeather("New York");