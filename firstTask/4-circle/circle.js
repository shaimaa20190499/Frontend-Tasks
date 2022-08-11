// 4- Compute Circle Area and Circumference

let radius = prompt('Please enter the radius of the circle to calculate the area and circumference')

let area = 3.14 * radius * radius;
let circumference = 2 * 3.14 * radius;

// .toFixed(2) to round the result to 2 decimal numbers after the point
console.log("The area of the circle is " + area.toFixed(2) + " and the circumference is " + circumference.toFixed(2));