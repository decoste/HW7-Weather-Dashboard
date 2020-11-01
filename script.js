

function one(city) {
    let APIKey = "96c8874a0753b8470e0d5572d7035272"
    let WeatherURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city +
        "&appid=" + APIKey;
    $.ajax({
        url: WeatherURL,
        type: "GET",
        dataType: "json",
        success: function (data) {
            let humidity = data.main.humidity;
            let windSpeed = data.wind.speed;
            let date = moment().format('L');

            // Convert the temp to fahrenheit
            let tempF = (data.main.temp - 273.15) * 1.80 + 32;

            $('#city-date').text(city + " (" + date + ")");
            $('#temp').text("Temp: " + tempF.toFixed(2) + " °F");
            $('#humidity').text("Humidity: " + humidity + " %");
            $('#windSpeed').text("Wind Speed: " + windSpeed + " MPH");
            $('#uvIndex').text("UV Index: ");
        }
    });

    let foreCastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey;
    $.ajax({
        url: foreCastURL,
        type: "GET",
        dataType: "json",
        success: function (data2) {
            console.log(data2.list[20])
            console.log(data2);

            let date1 = data2.list[0].dt_txt;
            let date2 = data2.list[5].dt_txt;
            let date3 = data2.list[12].dt_txt;
            let date4 = data2.list[20].dt_txt;

            $('#date1').text(date1);
            $('#date2').text(date2);
            $('#date3').text(date3);
            $('#date4').text(date4);

            let temp1 = (data2.list[0].main.temp- 273.15) * 1.80 + 32;
            let temp2 = (data2.list[5].main.temp- 273.15) * 1.80 + 32;
            let temp3 = (data2.list[12].main.temp- 273.15) * 1.80 + 32;
            let temp4 = (data2.list[20].main.temp- 273.15) * 1.80 + 32;

            $('#temp1').text("Temp: " + temp1.toFixed(2) + " °F");
            $('#temp2').text("Temp: " + temp2.toFixed(2) + " °F");
            $('#temp3').text("Temp: " + temp3.toFixed(2) + " °F");
            $('#temp4').text("Temp: " + temp4.toFixed(2) + " °F");

            let hum1 = data2.list[0].main.humidity;
            let hum2 = data2.list[5].main.humidity;
            let hum3 = data2.list[12].main.humidity;
            let hum4 = data2.list[20].main.humidity;

            $('#hum1').text("Humidity: " + hum1 + " MPH");
            $('#hum2').text("Humidity: " + hum2 + " MPH");
            $('#hum3').text("Humidity: " + hum3 + " MPH");
            $('#hum4').text("Humidity: " + hum4 + " MPH");


        }
    });

}


$('#btn').on("click", function (event) {
    event.preventDefault();
    const searchedCity = $('#enteredCity').val().trim();
    one(searchedCity);
});