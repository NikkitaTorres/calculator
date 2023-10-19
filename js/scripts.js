// business logic
function add(number1, number2) {
  return number1 + number2;
}

// user interface logic 
const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));

function saySomething(whatToSay) {    
  window.alert(whatToSay);    
}   

const result = add(number1, number2);   
const outputText = " The sum of addition is " + result + "."; 

//business logic
function sub(number1, number2) {
  return number1 - number2;
}

//user interface logic


function saySomething(whatToSay) { 
  window.alert(whatToSay);    
}   

const result2 = sub(number1, number2);  
const outputText2 = " The remainder of subtraction is " + result2 + ".";   

//business logic

function mult(number1, number2) {
  return number1 * number2
}

//user interface logic


function saySomething(whatToSay) {   
  window.alert(whatToSay);     
}  

const result3 = mult(number1, number2);   
const outputText3 = " The result of multiplication is " + result3 + ".";   

//business logic

function div(number1, number2) {
  return number1 / number2
}

//user interface logic



function saySomething(whatToSay) {  
  window.alert(whatToSay);  
}  

const result4 = div(number1, number2);
const outputText4 = " The result of division is " + result4 + ".";

//business logic

function rem(number1, number2) {
  return number1 % number2
}

//user interface logic


function saySomething(whatToSay) {   
  window.alert(whatToSay);    
} 

const result5 = rem(number1, number2); 
const outputText5 = " The remainder after division is " + result5 + ".";

saySomething(outputText + outputText2 + outputText3 + outputText4 + outputText5);