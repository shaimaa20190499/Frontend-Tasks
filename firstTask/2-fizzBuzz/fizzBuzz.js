// 2- Fizz Buzz Game
let fizzBuzz = prompt('Please enter a number to play FIZZBUZZ')

if(fizzBuzz%3 == 0 && fizzBuzz%5 != 0){
    console.log("Fizz")
}else if (fizzBuzz%5 == 0 && fizzBuzz%3 != 0) {
    console.log("Buzz")
}else if (fizzBuzz%3 == 0 && fizzBuzz%5 == 0) {
    console.log("FizzBuzz")
}else{
    console.log("Not a fizz or a buzz :)")
}