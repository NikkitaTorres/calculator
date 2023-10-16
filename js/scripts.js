// business logic
function add(number1, number2) {
  return number1 + number2;
}

// user interface logic 
const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));

window.alert(add(number1, number2));

//business logic
function sub(number3, number4) {
  return number3 - number4;
}

//user interface logic
const number3 = parseInt(prompt("Enter a number:"));
const number4 = parseInt(prompt("Enter another number:"));

window.alert(sub(number3, number4));

//business logic

function mult(number5, number6) {
  return number5 * number6
}

//user interface logic

const number5 = parseInt(prompt("Enter a number:"));
const number6 = parseInt(prompt("Enter another number:"));

window.alert(mult(number5, number6));

//business logic

function div(number7, number8) {
  return number7 / number8
}

//user interface logic

const number7 = parseInt(prompt("Enter a number:"));
const number8 = parseInt(prompt("Enter another number:"));

window.alert(div(number7, number8));

//business logic

function rem(number9, number10) {
  return number9 % number10
}

//user interface logic

const number9 = parseInt(prompt("Enter a number:"));
const number10 = parseInt(prompt("Enter another number:"));

window.alert(rem(number9, number10));