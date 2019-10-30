alert('Enter two numbers to see if the first is greater than the second');

var firstNumber = prompt("enter the first number");
var secondNumber=prompt("enter the second number");
if (firstNumber>secondNumber ) {
    message = 'firstNumberis greater';

  } else if (firstNumber < secondNumber) {
    message = 'firstNumberis lesser';
  } else {
    message = 'the numbers are the same';
  }