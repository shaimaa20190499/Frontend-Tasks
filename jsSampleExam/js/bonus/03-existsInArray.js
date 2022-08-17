// Check if the user with the name "John" exists in the array of objects

function check(){
    let arr = [{name:'Jack', age: 29}, {name:'Will', age: 31}, {name:'John', age: 24}, {name:'Oprah', age: 63}];
    let exists = false;
    for(let i=0; i<arr.length; i++){
        // let obj = arr[i];
        let objSize = Object.keys(arr[i]).length;
        let values = Object.values(arr[i]);
        for(let j=0; j<objSize; j++){
            if(values[j] == 'John'){
                exists = true;
                console.log(`John exists in array of objects? ${exists}`)
            }
        }
    }
}

check();