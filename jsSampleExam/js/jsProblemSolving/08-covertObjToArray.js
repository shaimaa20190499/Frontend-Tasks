// Write a function that converts an object into an array, where each
// element represents a key-value pair in the form of an array.
// For Example :
//  ({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]] 

function convertObjToArray(){
    let obj = {
        a: 1,
        b: 2
    }
    console.log(Object.entries(obj));
}

convertObjToArray();