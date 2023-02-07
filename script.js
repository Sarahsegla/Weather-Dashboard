

var searchInput = document.getElementById('#search-input');

// var forecast 

const bigDay = moment().format('L');
$('.BIGday').text(bigDay);


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


const APIKey = "03067ded181dcabf4f389039837fbc83";

cityName = searchInput;


const queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" 
+ searchInput + "&appid=" + APIKey;


const queryURL1 = "https://api.openweathermap.org/data/2.5/weather?q=" 
+ "sheffield" + "&appid=" + APIKey;

console.log(queryURL1);
