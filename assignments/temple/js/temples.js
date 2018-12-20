var firstTemple = new XMLHttpRequest();
firstTemple.open('GET', 'https://api.openweathermap.org/data/2.5/weather?zip=20895,us&appid=8d7178b81fed26ae734b0d4364f47036', true);
firstTemple.send();

firstTemple.onload=  function(){
    var jsonRespObj = JSON.parse(firstTemple.responseText);

    console.log(jsonRespObj);
    
    document.getElementById('firstTempleCurrent').innerHTML= jsonRespObj.weather[0].description;
    document.getElementById('firstTempleTemper').innerHTML = jsonRespObj.main.temp;
    document.getElementById('firstTempleHum').innerHTML = jsonRespObj.main.humidity;
    document.getElementById('firstTempleWind').innerHTML = jsonRespObj.wind.speed;
    
}


var secondTemple = new XMLHttpRequest();
secondTemple.open('GET', 'https://api.openweathermap.org/data/2.5/weather?zip=80528,us&appid=8d7178b81fed26ae734b0d4364f47036', true);
secondTemple.send();

secondTemple.onload=  function(){
    var jsonRespObj = JSON.parse(secondTemple.responseText);

    console.log(jsonRespObj);
    
    document.getElementById('fourthTempleCurrent').innerHTML= jsonRespObj.weather[0].description;
    document.getElementById('fourthTempleTemper').innerHTML = jsonRespObj.main.temp;
    document.getElementById('fourthTempleHum').innerHTML = jsonRespObj.main.humidity;
    document.getElementById('fourthTempleWind').innerHTML = jsonRespObj.wind.speed;
    
}




var thirdTemple = new XMLHttpRequest();
thirdTemple.open('GET', 'https://api.openweathermap.org/data/2.5/weather?zip=63141,us&appid=8d7178b81fed26ae734b0d4364f47036', true);
thirdTemple.send();

thirdTemple.onload=  function(){
    var jsonRespObj = JSON.parse(thirdTemple.responseText);

    console.log(jsonRespObj);
    
    document.getElementById('thirdTempleCurrent').innerHTML= jsonRespObj.weather[0].description;
    document.getElementById('thirdTempleTemper').innerHTML = jsonRespObj.main.temp;
    document.getElementById('thirdTempleHum').innerHTML = jsonRespObj.main.humidity;
    document.getElementById('thirdTempleWind').innerHTML = jsonRespObj.wind.speed;
    
}




var weatherObj = new XMLHttpRequest();
weatherObj.open('GET', 'https://api.openweathermap.org/data/2.5/weather?zip=29601,us&appid=8d7178b81fed26ae734b0d4364f47036', true);
weatherObj.send();

weatherObj.onload=  function(){
    var jsonRespObj = JSON.parse(weatherObj.responseText);

    console.log(jsonRespObj);
    
    document.getElementById('secondTempleCurrent').innerHTML= jsonRespObj.weather[0].description;
    document.getElementById('secondTempleTemper').innerHTML = jsonRespObj.main.temp;
    document.getElementById('secondTempleHum').innerHTML = jsonRespObj.main.humidity;
    document.getElementById('secondTempleWind').innerHTML = jsonRespObj.wind.speed;
    
}

