// Challenge 1
// Log li with id special

// Challenge 2
// Log all li with class of country

// Challenge 3
// Add class special to the li with id special

// Challenge 4
// In your code, replace the content of the element with id special
// by your favorite country (other than Portugal of course)let apiKey = "ba636fe185d53843e63a61e71f77290c";
var x = document.getElementById("searchbar").value;

const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const d = new Date();
let day = weekday[d.getDay()];
var today = new Date();
var space = " ";
let time =
  ("0" + today.getHours()).slice(-2) +
  ":" +
  ("0" + today.getMinutes()).slice(-2);
let time1 = day + space + time;
document.getElementById("date-time").innerHTML = time1;
function changeCity() {
  function showTemperature(response) {
    let temperature = document.querySelector("h1");
    temperature.innerHTML = `${response.data.main.temp}`;
    let humidity = document.getElementById("hum");
    humidity.innerHTML = `Humidity ${response.data.main.humidity}%`;
    let wind = document.getElementById("wind");
    wind.innerHTML = `Wind ${response.data.wind.speed} km/h`;
  }
  let apiKey = "ba636fe185d53843e63a61e71f77290c";
  let apiUrl = "https://api.openweathermap.org/data/2.5/weather";
  var x = document.getElementById("searchbar").value;
  document.getElementById("city").innerHTML = x;
  axios
    .get(`${apiUrl}?q=${x}&units=metric&appid=ba636fe185d53843e63a61e71f77290c`)
    .then(showTemperature);
}

var msg = document.getElementById("searchbar");
var button = document.getElementById("searchButton");
var textBox = document.getElementById("searchbar");

// This event is fired when button is clicked
button.addEventListener("click", function () {
  var str = textBox.value;
  document.getElementById("city").innerHTML = str;
});

textBox.addEventListener("keyup", function (event) {
  // Checking if key pressed is ENTER or not
  // if the key pressed is ENTER
  // click listener on button is called
  if (event.keyCode == 13) {
    button.click();
  }
});
document.getElementById("searchButton").addEventListener("click", changeCity);
