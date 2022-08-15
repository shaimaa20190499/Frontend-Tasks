function convertObjArray(){
    toConvert = {
        a : 1,
        b : 2
    }

    convertedArray = [];
    keyLength = Object.keys(toConvert).length;

    for(let i=0; i <keyLength; i++){
        // convertedArray.push(Object.entries(toConvert));
        keyValue = [];
        keyValue.push(Object.keys(toConvert)[i]);
        keyValue.push(Object.values(toConvert)[i]);
        convertedArray.push(keyValue);
    }
    console.log(convertedArray);
}
convertObjArray();