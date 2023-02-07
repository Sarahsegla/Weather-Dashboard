


// var forecast 

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


document.getElementById('search-input').value = getSavedValue('search-input');

function saveValue(e) {
    var id = e.id;
    var val = e.value;
    localStorage.setItem(id, val);
}

function getSavedValue (v) {
    if (!localStorage.getItem(v)) {
        return "";
    }
    return localStorage.getItem(v)
}

//apikey
const APIKey = "03067ded181dcabf4f389039837fbc83";
 

// url works input search city
const queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" 
+ document.getElementById('search-input').value + "&appid=" + APIKey;

// practice
const queryURL1 = "https://api.openweathermap.org/data/2.5/forecast?q=" 
+ "sheffield" + "&appid=" + APIKey;

console.log(queryURL1);

console.log(queryURL);

// work on input temp etc.

$.ajax({
    url: queryURL,
    method: "GET"
})

.then(function(response) {

console.log(response);

$(".BIGday").html("<p>" + response.name + bigDay + "</p>");
$(".BIGtemp").text("Temp:" + response.main.temp);
$(".BIGwind").text("Wind:" + response.wind.speed + "KPH");
$(".BIGhumidity").text("Humidity:" + response.main.humidity + "%");


})

//five day forecast
const fiveURL = "https://api.openweathermap.org/data/2.5/forecast?q=" 
+ document.getElementById('search-input').value + "&appid=" + APIKey;

console.log(fiveURL);

$.ajax({
    url: fiveURL,
    method: "GET"
})

.then(function(response) {

console.log(response);

//$(".day1").html("<p>" + response.name + bigDay + "</p>");
$(".temp1").text("Temp:" + response.list[0].main.temp);
$(".wind1").text("Wind:" + response.list[0].wind.speed + "KPH");
$(".humidity1").text("Humidity:" + response.list[0].main.humidity + "%");

//day2
$(".temp2").text("Temp:" + response.list[9].main.temp);
$(".wind2").text("Wind:" + response.list[9].wind.speed + "KPH");
$(".humidity2").text("Humidity:" + response.list[9].main.humidity + "%");

//day3
$(".temp3").text("Temp:" + response.list[18].main.temp);
$(".wind3").text("Wind:" + response.list[18].wind.speed + "KPH");
$(".humidity3").text("Humidity:" + response.list[18].main.humidity + "%");

//day4
$(".temp4").text("Temp:" + response.list[26].main.temp);
$(".wind4").text("Wind:" + response.list[26].wind.speed + "KPH");
$(".humidity4").text("Humidity:" + response.list[26].main.humidity + "%");

//day5
$(".temp5").text("Temp:" + response.list[34].main.temp);
$(".wind5").text("Wind:" + response.list[34].wind.speed + "KPH");
$(".humidity5").text("Humidity:" + response.list[34].main.humidity + "%");


})
