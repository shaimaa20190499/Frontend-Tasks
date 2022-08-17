// Write a function to reverse an array. For Example :
// reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1] (10 points) 

function arrayReverse(){
    let arr = []
    let arrSize = Number(prompt("Please enter the number of items to add to the array!"));
    
    for(let i=0; i<arrSize; i++){
        let item = Number(prompt("Please enter an item to add to the array!"));
        arr.push(item);
    }
    
    console.log(arr);
    console.log(arr.reverse());
}

arrayReverse();