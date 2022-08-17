// Write a function which can return multiple values from a function

function returnMultipleValues() {
    let value1 = prompt("Please enter first value!"),
        value2 = prompt("Please enter second value!");

    // return multiple values as an array
    return [value1, value2];
}

// accessing each value on its own
function returnEachValue(){
    let values = returnMultipleValues();
    console.log(values);
    console.log(`${values[0]} \n${values[1]}`);
}

returnEachValue();