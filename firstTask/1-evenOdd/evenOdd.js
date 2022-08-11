// 1- Check The Number Is Even or Odd
let check = prompt('Please enter a number to check whether it\'s even or odd')

let checkMessage = check%2 == 0? 
                    "The number you\'ve entered is an even number!" : 
                    "The number you\'ve entered is an odd number!";
console.log(checkMessage)