// Write a function which can convert the time input given in 12
// hours format to 24 hours format

function convertTime(){
    let hrs = Number(prompt("Please enter the hour to convert (00)"));
    let mins = Number(prompt("Please enter the minutes to convert (00)"));
    let timeInDay = prompt("Please enter AM or PM").toUpperCase();

    // hrs = hrs * 60;
    // totalMins = hrs + mins;
    if(timeInDay == 'PM'){
        hrs +=12;
        return `${hrs}:${mins}`
        
    } else{
        return `${hrs}:${mins}`
    }
}

console.log(convertTime());