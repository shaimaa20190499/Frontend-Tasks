// 15- Create Simple Calculator (+ , - , * , /)
 

let num1 = parseInt(prompt("Please enter first number!")),
    operator = prompt("Please enter operator!");
    num2 = parseInt(prompt("Please enter second number!"));

switch(operator){
    case "+": 
        console.log("Sum = " + (num1+num2));
        break;
    case "-":
        console.log("Sub = " + (num1-num2));
        break;
    case "*":
        console.log("MLT = " + (num1*num2));
        break;
    case "/":
        console.log("DIV = " + (num1/num2));
        break;
    default:
        console.log("No proper operator was entered");
}
