// a e i o u

function vowels(str){
    str = prompt("Please enter a string!");
    // characters = str.split("");
    let vowel = 0;
    vowelChars = [];
    for(let i=0; i<str.length; i++){
        if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u'){
            vowel++;
        }
    }
    return vowel;
}

console.log(vowels());