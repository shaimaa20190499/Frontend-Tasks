// 7- check whether a given positive number is a multiple of 5 or a multiple of 8. 

let num = prompt("Please enter a number to check whether it\'s a multiple of 5 or 8!");

if(num%5 == 0 && num%8 == 0){
    console.log("The number you\'ve entered is a multiple of 5 and a multiple of 8 (0 or 40)");
}else if(num%5 == 0){
    console.log("The number you\'ve entered is a multiple of 5");
}else if(num%8 == 0){
    console.log("The number you\'ve entered is a multiple of 8");
}else{
    console.log("The number you\'ve entered is neither a multiple of 5 nor a multiple of 8")
}