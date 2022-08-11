// 12- store elements in an array and print it.
// Test Data:
// Input 10 elements in the array:
// element - 0 : 1
// element - 1 : 1
// element - 2 : 2 

let size = prompt("Please enter the number of elements you would like to add to the array!"),
    array = [];

for(i=1; i<=size; i++){
    if(i==1){
        item = prompt("Please enter " + i + "st number!");
    }else if(i==2){
        item = prompt("Please enter " + i + "nd number!");
    }else if(i==3){
        item = prompt("Please enter " + i + "rd number!");
    }else{
        item = prompt("Please enter " + i + "th number!");
    }
    array.push(item);
}

for(i=0; i<size; i++){
    console.log("element - " + i + " : " + array[i]);
}
