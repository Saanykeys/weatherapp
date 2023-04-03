import requests


api_key = "8819c76fc201539334589d1035749c88"


base_url = "https://api.openweathermap.org/data/2.5/weather?"


def get_weather(city):
  
    complete_url = base_url + "appid=" + api_key + "&q=" + city

    
    response = requests.get(complete_url)

 #JSON 
    weather_data = response.json()

   
    if weather_data["cod"] != "404":
      
        temperature = weather_data["main"]["temp"]
       
        temperature = round(temperature - 273.15, 1)

        description = weather_data["weather"][0]["description"]

        
        return f"The temperature in {city} is {temperature}°c and the weather is {description}."
    else:
        return "City not found."

# Use this for city name 
city = input("Enter a city name: ")

# Get weather Function 
print(get_weather(city))
