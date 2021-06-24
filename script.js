var el = document.querySelector(".btn");
var apiKey = "a4c7417ae92f2276dda26edb0cf6c143";
var lastCity = document.getElementById("recentsearch")
var searchBut = document.getElementById("searchButton")
var inputEl = document.getElementById("exampleCity")



el.addEventListener("click", function (event) {
    event.preventDefault();
    var inputEl = document.getElementById("exampleCity")
    console.log(inputEl.value);
    getCurrentWeather(inputEl.value)
})

function getCurrentWeather(cityValue) {
    var currentApiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityValue + "&appid=" + apiKey
    fetch(currentApiUrl).then(response => {
        // console.log(response)
        return response.json()
    }).then(data => {
        console.log(data)
        var current = document.getElementById("currentCity")
        current.innerText = data.name;
        var tempCurrentDay = document.getElementById("temp1")
        tempCurrentDay.innerText = data.main.temp;
        var windCurrentday = document.getElementById("wind1")
        windCurrentday.innerText = data.wind.speed;
        var humidityCurrentDay = document.getElementById("humidity1")
        humidityCurrentDay.innerText = data.main.humidity;

        var lat = data.coord.lat
        var lon = data.coord.lon
        console.log(lat, lon)
        dailyForecast(lat, lon)

    })
}


function recentSearch(){
//  localStorage.setItem( "examplecity", "3" );
  var inputVal = inputEl.value;

  if (inputval,searchBut === true) {
      localStorage.setItem('city', inputVal);
      location.reload();
  }
 for (let i = 0; i < localStorage.length; i++) {
    var store = localStorage.key[i];
    var store2 = localStorage.getItem(key);
    lastCity.innerText = localStorage.getItem('city')
 }
}


function dailyForecast(lat, lon) {
    var dailyUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey
    fetch(dailyUrl).then(response => {
        return response.json()

    }).then(data => {
        console.log(data)
        var currentIndex = document.getElementById("index1")
        currentIndex.innerText = data.current.uvi
        
        var forecastTemp1 = document.getElementById("dailytemp1")
        forecastTemp1.innerText = data.daily[0].temp.day
        var forecastWind1 = document.getElementById("dailywind1")
        forecastWind1.innerText = data.daily[0].wind_speed
        var forecastHumidity1 = document.getElementById("dailyhumidity1")
        forecastHumidity1.innerText = data.daily[0].humidity

        var forecastTemp2 = document.getElementById("dailytemp2")
        forecastTemp2.innerText = data.daily[1].temp.day
        var forecastWind2 = document.getElementById("dailywind2")
        forecastWind2.innerText = data.daily[1].wind_speed
        var forecastHumidity2 = document.getElementById("dailyhumidity2")
        forecastHumidity2.innerText = data.daily[1].humidity
        
        var forecastTemp3 = document.getElementById("dailytemp3")
        forecastTemp3.innerText = data.daily[2].temp.day
        var forecastWind3 = document.getElementById("dailywind3")
        forecastWind3.innerText = data.daily[2].wind_speed
        var forecastHumidity3 = document.getElementById("dailyhumidity3")
        forecastHumidity3.innerText = data.daily[2].humidity

        var forecastTemp4 = document.getElementById("dailytemp4")
        forecastTemp4.innerText = data.daily[3].temp.day
        var forecastWind4 = document.getElementById("dailywind4")
        forecastWind4.innerText = data.daily[3].wind_speed
        var forecastHumidity4 = document.getElementById("dailyhumidity4")
        forecastHumidity4.innerText = data.daily[3].humidity

        var forecastTemp5 = document.getElementById("dailytemp5")
        forecastTemp5.innerText = data.daily[4].temp.day
        var forecastWind5 = document.getElementById("dailywind5")
        forecastWind5.innerText = data.daily[4].wind_speed
        var forecastHumidity5 = document.getElementById("dailyhumidity5")
        forecastHumidity5.innerText = data.daily[4].humidity
 


    })
}
