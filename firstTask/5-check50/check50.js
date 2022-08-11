// 5- check two given numbers and return true if one of the number is 50 or if their sum is 50. 

let num1 = parseInt(prompt("Please enter first number!"));
let num2 = parseInt(prompt("Please enter second number!"));
let sum = num1 + num2;

if(num1 == 50 || num2 == 50 || sum == 50){
    console.log("True");
}else{
    console.log("False");
}
