// Write a function which accepts two valid dates and returns the
// difference between them as number of days

function dateDifference(){
    let year1 = Number(prompt("Please enter first year!"));
    let month1 = Number(prompt("Please enter first month!"));
    let day1 = Number(prompt("Please enter first day!"));
    
    let year2 = Number(prompt("Please enter second year!"));
    let month2 = Number(prompt("Please enter second month!"));
    let day2 = Number(prompt("Please enter second day!"));

    date1 = new Date(`${month1}/${day1}/${year1}`);
    date2 = new Date(`${month2}/${day2}/${year2}`);

    let Difference_In_Time = date2.getTime() - date1.getTime();
    let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

    console.log(Difference_In_Days);
}

dateDifference();