// 14- calculate the factorial of a given number
// Test Data :
// Input the number : 5
// Expected Output :
// The Factorial of 5 is: 120 

let num = prompt("Please enter the number which you would like to get the factorial of!"),
factorial=1;


for(i=0;i<num; num--){
    factorial *=num;
}

console.log(factorial);
