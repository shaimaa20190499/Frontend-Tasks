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