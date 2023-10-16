// business logic
function add(number1, number2) {
  return number1 + number2;
}

// user interface logic 
const number1 = parseInt(prompt("Enter a number to add:"));
const number2 = parseInt(prompt("Enter another number to be added:"));

function saySomething(whatToSay) {    
  window.alert(whatToSay);    
}   

const result = add(number1, number2);   
const outputText = "The sum is " + result + ".";  
saySomething(outputText);  

//business logic
function sub(number3, number4) {
  return number3 - number4;
}

//user interface logic
const number3 = parseInt(prompt("Enter a number to subtract from:"));
const number4 = parseInt(prompt("Enter another number to subtract from the 1st:"));

function saySomething(whatToSay) { 
  window.alert(whatToSay);    
}   

const result2 = sub(number3, number4);  
const outputText2 = "The remainder is " + result2 + ".";   
saySomething(outputText2);   

//business logic

function mult(number5, number6) {
  return number5 * number6
}

//user interface logic

const number5 = parseInt(prompt("Enter a number to multiply:"));
const number6 = parseInt(prompt("Enter another number to multiply:"));

function saySomething(whatToSay) {   
  window.alert(whatToSay);     
}  

const result3 = mult(number5, number6);   
const outputText3 = "The result is " + result3 + ".";   
saySomething(outputText3);  

//business logic

function div(number7, number8) {
  return number7 / number8
}

//user interface logic

const number7 = parseInt(prompt("Enter a number to be divided:"));
const number8 = parseInt(prompt("Enter another number to divide the first number by:"));

function saySomething(whatToSay) {  
  window.alert(whatToSay);  
}  

const result4 = div(number7, number8);
const outputText4 = "The result of the division is " + result4 + ".";
saySomething(outputText4);

//business logic

function rem(number9, number10) {
  return number9 % number10
}

//user interface logic

const number9 = parseInt(prompt("Enter a number to be divided:"));
const number10 = parseInt(prompt("Enter another number to find the remainder of the division:"));

function saySomething(whatToSay) {   
  window.alert(whatToSay);    
} 

const result5 = rem(number9, number10); 
const outputText5 = "The remainder is " + result5 + ".";
saySomething(outputText5); 