// 3- Reverse String for example welcome => emoclew

function reverseString(str){
    str = prompt('Please enter a word/string to reverse');
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    console.log(joinArray);
}
reverseString();