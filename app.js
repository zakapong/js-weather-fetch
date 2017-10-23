var temp;
var loc;
var icon;
var humidity;
var wind;
var direction;

function update(weather) {
    icon.src = "imgs/codes/" + weather.icon + ".png"
    humidity.innerHTML = weather.humidity;
    wind.innerHtml = weather.wind;
    direction.innerHTML = weather.direction;
    loc.innerHTML = weather.loc;
    temp.innerHTML = weather.temp;
}

window.onload = function () {
    temp = document.getElementById("temperature");
    loc = document.getElementById("location");
    icon = document.getElementById("icon");
    humidity = document.getElementById("humidity");
    wind = document.getElementById("wind");
    direction = document.getElementById("direction");

  var weather = {};
    weather.wind = 3.5;
    weather.direction = "N";
    weather.humidity = 35;
    weather.loc = "Boston";
    weather.temp = "45";
    weather.icon = 200;
    
    update(weather);

}