// 6- check from two given integers, whether one is positive and another one is negative. 

let num1 = prompt("Please enter a number to check whether it\'s positive or negative!"),
    num2 = prompt("Please enter a number to check whether it\'s positive or negative!");

let checkNum1Message = num1 >= 0? 
                        "The first number you\'ve entered is a positive number!" : 
                        "The first number you\'ve entered is a negative number!";

let checkNum2Message = num2 >= 0? 
                        "The second number you\'ve entered is a positive number!" : 
                        "The second number you\'ve entered is a negative number!";
console.log(checkNum1Message + "\n" + checkNum2Message);