var weatherConditions = new XMLHttpRequest();
var weatherForecast = new XMLHttpRequest();

weatherConditions.open('GET', 'https://api.openweathermap.org/data/2.5/weather?zip=83263,us', true);
weatherForecast.open('GET', 'https://api.openweathermap.org/data/2.5/weather?zip=83263,us', true);

weatherConditions.send();
weatherForecast.send();

weatherConditions.onload = function() {
    var weatherSpringfield = JSON.parse(weatherConditions.responseText);
    console.log(weatherSpringfield);
    
    var forecastSpringfield = JSON.parse(weatherForecast.responseText);
    console.log(forecastSpringfield);
    
    document.getElementById('statusImg').src = "https://icons-ak.wxug.com/i/c/k/" + weatherSpringfield.current_observation.icon + ".gif";
    document.getElementById('status').innerHTML = weatherSpringfield.current_observation.weather;
    document.getElementById('temp').innerHTML = weatherSpringfield.current_observation.temp_f + "°F";   
    document.getElementById('windSpeed').innerHTML = "Windspeed: " + weatherSpringfield.current_observation.wind_mph + "mph";
    document.getElementById('txtWeather').innerHTML = forecastSpringfield.forecast.txt_forecast.forecastday["0"].fcttext;
    document.getElementById('windChill').innerHTML = "Windchill: " + weatherSpringfield.current_observation.windchill_f + "°F";
    document.getElementById('txtWind').innerHTML = "Winds : " + weatherSpringfield.current_observation.wind_string;
    
}