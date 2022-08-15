//Loops
function factorialLoop(){
    let num = prompt("Please enter the number which you would like to get the factorial of!"),
    factorial=1;
    for(i=0;i<num; num--){
        factorial *=num;
    }
    return factorial;
}
console.log(factorialLoop(5));

// functions
function recursionFactorial(num) {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * recursionFactorial(num - 1));
    }
  }
console.log(recursionFactorial(5));