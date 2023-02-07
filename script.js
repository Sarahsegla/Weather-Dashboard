


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
 
//  const searchInput = $('#search-input').value().trim();

// url works but not input search city
const queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" 
+ searchInput + "&appid=" + APIKey;

// practice
const queryURL1 = "https://api.openweathermap.org/data/2.5/weather?q=" 
+ "sheffield" + "&appid=" + APIKey;

console.log(queryURL1);

console.log(queryURL);

// work on input 



var apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" ;
var Key = "03067ded181dcabf4f389039837fbc83";
var searchString = "";
var queryURLNew;
var searchNumber = 0;

$("#search-button").on("click", function () {
    $(".BIGlist").empty();
    searchString = $("#search-input").val();
    queryURLNew = apiURL + searchString + "&appid=" + APIKey;
    console.log('url', queryURLNew)


    $.ajax({
        url: queryURLNew,
        method: "GET"
    }).then(function (result) {
console.log(result);
console.log(queryURLNew);
console.log(result.main);

$(".BIGday").html("<h1>" + result.name);


})


});

