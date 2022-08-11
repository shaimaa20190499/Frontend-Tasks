// display the pattern like right angle triangle using an asterisk.
// *
// **
// ***
// ****
// *****

let stars = prompt("Please enter the number of the stars!"),
    triangle = "";

for(i=0; i<stars; i++){
    for(j=0; j<=i; j++){
        triangle += "*";
    }
    triangle += "\n";
}
console.log(triangle);