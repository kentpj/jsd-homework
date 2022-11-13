//The Age Calculator
const dt = new Date();
let currentYear = dt.getFullYear();
let birthYear = 1986;
let a1 = currentYear - birthYear;
console.log("They are either " + a1 + " or " + (a1 - 1) + "");

//The Lifetime Supply Calculator
const maximumAge = 90;
let currentAge = getCurrentAge();
let estAmount = getEstAmount();
let a2 = (maximumAge - currentAge) * (estAmount * 365);
console.log(
  "You will need " +
    a2 +
    " to last you until the ripe old age of " +
    maximumAge +
    ""
);

function getCurrentAge() {
  let age = null;
  while (age === null) {
    let input = prompt("How old are you?");
    if (isNaN(input)) {
      alert("Invalid age!");
    } else if (input <= 0) {
      alert("Value must be greater than 0");
    } else {
      age = parseInt(input);
    }
  }
  return age;
}

function getEstAmount() {
  let amt = null;
  while (amt === null) {
    let input = prompt("Enter your estimated amount per day:");
    if (isNaN(input)) {
      alert("Invalid input!");
    } else if (input <= 0) {
      alert("Value must be greater than 0");
    } else {
      amt = parseInt(input);
    }
  }
  return amt;
}

//The Geometrizer
let radius = 50;
let circumference = Math.PI * 2 * radius;
let area = Math.PI * radius * radius;
console.log("The circumference is " + circumference + "");
console.log("The area is " + area + "");

//The Temperature Converter
let celsius = 37;
let celsiusToFahrenheit = (celsius * 9) / 5 + 32;
let fahrenheitToCelsius = ((celsiusToFahrenheit - 32) * 5) / 9;
console.log("" + celsius + "°C is " + celsiusToFahrenheit + "°F");
console.log("" + celsiusToFahrenheit + "°F is " + fahrenheitToCelsius + "°C.");
