

function one(city){
    
    let APIKey = "96c8874a0753b8470e0d5572d7035272"
    let WeatherURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city +
    "&appid=" + APIKey;
$.ajax({
    url: WeatherURL,
    type: "GET",
    dataType: "json",
    success: function(data){
      console.log(data);
      console.log(data.main.humidity)
      let temp = data.main.temp;
      let  humidity = data.main.humidity;
      let windSpeed = data.wind.speed;
      let date = moment().format('L');

  $('#city-date').text(city + " (" + date + ")");
  $('#temp').text("Temp: " + temp + " °F");
  $('#humidity').text("Humidity: " + humidity +  " %");
  $('#windSpeed').text("Wind Speed: " + windSpeed + " MPH");
  $('#uvIndex').text("UV Index: ");
    }
  });
  
}

$('#btn').on("click", function(event){
    event.preventDefault();
    const searchedCity = $('#enteredCity').val().trim();
    one(searchedCity);
});