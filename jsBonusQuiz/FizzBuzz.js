// 2- Fizz Buzz Game
function FizzBuzz(){
    let num = prompt('Please enter a number to play FIZZBUZZ');
    if(num%3 == 0 && num%5 != 0){
        console.log("Fizz");
    }else if (num%5 == 0 && num%3 != 0) {
        console.log("Buzz");
    }else if (num%3 == 0 && num%5 == 0) {
        console.log("FizzBuzz");
    }else{
        console.log(num);
    }
}
FizzBuzz();