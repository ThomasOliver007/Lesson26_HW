// Request a user’s name and display the response “Hello, [name]”.
const userName = prompt("Name", "Kucko");
const greetingMessage = `Hello, ${userName}`;
console.log(greetingMessage);

// Request a user’s year of birth, count his age, and display the result. Store the current year as a constant.
const yearOfBirth = prompt("Year of birth", 2018);
const currentYear = new Date().getFullYear();
const age = currentYear - parseInt(yearOfBirth, 10);
console.log(age);

// Request a length of a side of a square from a user and display the perimeter of the square.
const sideLength = prompt("Side length of a square", 20);
const sideLengthIntoNumber = parseFloat(sideLength);
if (!isNaN(sideLengthIntoNumber) && sideLengthIntoNumber > 0) {
  const perimeter = 4 * sideLengthIntoNumber;
  console.log(perimeter);
}

// Request a radius of a circle and display the area of such a circle.
const radius = prompt("Radius of circle", 5);
const radiusIntoNumber = parseFloat(radius);
if (!isNaN(radiusIntoNumber) && radiusIntoNumber > 0) {
  const circleArea = Math.PI * Math.pow(radiusIntoNumber, 2);
  console.log(circleArea);
}

// Request a distance in km between the two cities from a user, and the time they want to cover it within. Count the speed needed to be on time.
const distance = prompt("Distance between setlements in km", 60);
const time = prompt("Time in minutes", 50);
const distanceIntoNumber = parseFloat(distance);
const timeIntoNumber = parseFloat(time);
if (
  !isNaN(distanceIntoNumber) &&
  !isNaN(timeIntoNumber) &&
  timeIntoNumber > 0
) {
  const speed = distanceIntoNumber / timeIntoNumber;
  console.log(speed);
}

// Create a currency converter. A user types in USD and the program converts them to EUR. The exchange rate should be stored as a constant.
let dollars = prompt("Amount of USD for exchange", 200);
const exchangeRate = 0.92;
const dollarsIntoNumber = parseFloat(dollars);
if (!isNaN(dollarsIntoNumber) && dollarsIntoNumber > 0) {
  const euros = dollarsIntoNumber * exchangeRate;
  console.log(euros);
}

// A user types in an amount of money in a wallet and the price of one chocolate bar. The program counts how many chocolate bars the user can buy, and how much change will he/she have left.
const money = prompt("Money available in wallet", 200);
const price = prompt("Price of one chocolate", 35);
const moneyIntoNumber = parseFloat(money);
const priceIntoNumber = parseFloat(price);
if (
  !isNaN(moneyIntoNumber) &&
  !isNaN(priceIntoNumber) &&
  moneyIntoNumber > 0 &&
  priceIntoNumber > 0
) {
  const numberOfChocolateToBuy = Math.floor(moneyIntoNumber / priceIntoNumber),
    change = moneyIntoNumber % priceIntoNumber;
  console.log(numberOfChocolateToBuy, change);
}

// A user states a flash drive memory in GB. The program has to count how many 820MB files can be stored on this flash drive.
const memory = prompt("Memory of flash in GB", 5);
const convertRateToMegabyte = 1024;
const memoryIntoNumber = parseFloat(memory);
if (!isNaN(memoryIntoNumber) && memoryIntoNumber > 0) {
  const memoryInMegabytes = memoryIntoNumber * convertRateToMegabyte;
  console.log(memoryInMegabytes);

  const fileSizeMegabytes = 820;
  const numberOfFilesOnMemory = memoryInMegabytes / fileSizeMegabytes;
  console.log(numberOfFilesOnMemory);
}

