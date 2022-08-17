// Show the execution of 3 asynchronous block of code, one after
// the other in sequence

setTimeout(function (){
    let n = 5;
    console.log(3);
    setTimeout(function(){
        console.log(2);
        setTimeout(function(){
            console.log(n);
        });
    }, 1000);
} , 0);