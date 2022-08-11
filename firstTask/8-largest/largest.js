// 8- find the largest of three given integers 
let num1 = prompt("Please enter first number!");
let num2 = prompt("Please enter second number!");
let num3 = prompt("Please enter third number!");

if(num1 > num2 && num1 > num3){
    console.log("Out of " + num1 + ", " + num2 + ", and " + num3 + " ----- " + num1 + " is the largest number out of all three numbers!");
}else if(num2 > num1 && num2 > num3){
    console.log("Out of " + num1 + ", " + num2 + ", and " + num3 + " ----- " + num2 + " is the largest number out of all three numbers!");
}else if(num3 > num1 && num3 > num2){
    console.log("Out of " + num1 + ", " + num2 + ", and " + num3 + " ----- " + num3 + " is the largest number out of all three numbers!");
}else{
    console.log("All three numbers are equal!");
}