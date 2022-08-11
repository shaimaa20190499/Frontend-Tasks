// 11- check whether a given number is positive or negative. 

let num = prompt("Please enter a number to check whether it\'s positive or negative!"),
    checkNumMessage = num >= 0? 
                        "The number you\'ve entered is a positive number!" : 
                        "The number you\'ve entered is a negative number!";
console.log(checkNumMessage);