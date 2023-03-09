// get elements for input tag and button tag
var input = document.getElementById('search-input');
const myButton = document.getElementById(`search-button`);



// date for current day
const bigDay = moment().format('L');
$('.BIGday').text(bigDay);

// dates for next 5 days with time
const dayOne = moment().add(1, 'days').calendar();
$('.day1').text(dayOne);

const dayTwo = moment().add(2, 'days').calendar();
$('.day2').text(dayTwo);

const dayThree = moment().add(3, 'days').calendar();
$('.day3').text(dayThree);

const dayFour = moment().add(4, 'days').calendar();
$('.day4').text(dayFour);

const dayFive = moment().add(5, 'days').calendar();
$('.day5').text(dayFive);



// save to localstorage

myButton.addEventListener("click", function(event) {
event.preventDefault()
 
var varInput = input.value.trim()

localStorage.setItem("varInput", varInput);

var cityInput = localStorage.getItem("cityInput");

//apikey
const APIKey = "03067ded181dcabf4f389039837fbc83";
 

// url works input search city
const queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" 
+ varInput + "&appid=" + APIKey;





$.ajax({
    url: queryURL,
    method: "GET"
})

.then(function(response) {

   
console.log(response);


$(".BIGday").text( response.name + "(" + bigDay + ")");
$(".BIGtemp").text("Temp:" + response.main.temp);
$(".BIGwind").text("Wind:" + response.wind.speed + "KPH");
$(".BIGhumidity").text("Humidity:" + response.main.humidity + "%");
$(".image").attr("src", "https://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png");


})

//button

var button = document.querySelector('#search-button');

//five day forecast
const fiveURL = "https://api.openweathermap.org/data/2.5/forecast?q=" 
+ document.getElementById('search-input').value + "&appid=" + APIKey;

console.log(fiveURL);

$.ajax({
    url: fiveURL,
    method: "GET"
})

.then(function(response) {
   
    let IconImages = "https://openweathermap.org/img/wn/" + response.list[0].weather[0].icon + "@2x.png";
console.log(response);
console.log(IconImages);



//day1
$(".temp1").text("Temp:" + response.list[0].main.temp);
$(".wind1").text("Wind:" + response.list[0].wind.speed + "KPH");
$(".humidity1").text("Humidity:" + response.list[0].main.humidity + "%");
$(".image1").attr("src", IconImages);

//day2
$(".temp2").text("Temp:" + response.list[9].main.temp);
$(".wind2").text("Wind:" + response.list[9].wind.speed + "KPH");
$(".humidity2").text("Humidity:" + response.list[9].main.humidity + "%");
$(".image2").attr("src", "https://openweathermap.org/img/wn/" + response.list[9].weather[0].icon + "@2x.png");

//day3
$(".temp3").text("Temp:" + response.list[18].main.temp);
$(".wind3").text("Wind:" + response.list[18].wind.speed + "KPH");
$(".humidity3").text("Humidity:" + response.list[18].main.humidity + "%");
$(".image3").attr("src", "https://openweathermap.org/img/wn/" + response.list[18].weather[0].icon + "@2x.png");

//day4
$(".temp4").text("Temp:" + response.list[26].main.temp);
$(".wind4").text("Wind:" + response.list[26].wind.speed + "KPH");
$(".humidity4").text("Humidity:" + response.list[26].main.humidity + "%");
$(".image4").attr("src", "https://openweathermap.org/img/wn/" + response.list[26].weather[0].icon + "@2x.png");

//day5
$(".temp5").text("Temp:" + response.list[34].main.temp);
$(".wind5").text("Wind:" + response.list[34].wind.speed + "KPH");
$(".humidity5").text("Humidity:" + response.list[34].main.humidity + "%");
$(".image5").attr("src", "https://openweathermap.org/img/wn/" + response.list[34].weather[0].icon + "@2x.png");


})



});
//console.log(queryURL);

function weatherIcons(icon) {
    $.ajax({

    })
}
    
 








