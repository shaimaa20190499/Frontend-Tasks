// Get the maximum value from a numbers array along with its index

function maxValue(){
    let arr = []
    let arrSize = Number(prompt("Please enter the number of items to add to the array!"));
    let max = 0;
    let maxIndex = 0;
    for(let i=0; i<arrSize; i++){
        let item = Number(prompt("Please enter an item to add to the array!"));
        arr.push(item);
        if(item>max){
            max = item;
            maxIndex = i;
        }
    }
    console.log(arr);
    console.log(`The maximum value is ${max} and its index in the array is ${maxIndex}`);
}

maxValue();