// 3- Reverse String for example welcome => emoclew

let str = prompt('Please enter a word/string to reverse')

function reverseString(str){
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
}
console.log(reverseString(str));