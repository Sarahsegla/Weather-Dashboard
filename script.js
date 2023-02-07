


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
const queryURL1 = "https://api.openweathermap.org/data/2.5/weather?q=" 
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


