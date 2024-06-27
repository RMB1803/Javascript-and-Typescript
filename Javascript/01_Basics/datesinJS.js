// Dates

let myDate = new Date();
//console.log(myDate); //2024-06-21T19:05:09.790Z
//console.log(myDate.toString()) //Sat Jun 22 2024 00:36:14 GMT+0530 (India Standard Time)
//console.log(myDate.toDateString()) // Sat Jun 22 2024
//console.log(myDate.toISOString()) // 2024-06-21T19:09:09.538Z
//console.log(myDate.toJSON()) // 2024-06-21T19:09:09.538Z
// console.log(myDate.toLocaleDateString()) // 6/22/2024
// console.log(myDate.toLocaleString()) // 6/22/2024, 12:42:14 AM


// Months starts from 0 in JS Date object.
// let myCreatedDate = new Date(2024, 0, 18) // Thu Jan 18 2024
// let myCreatedDate = new Date(2024, 2, 18, 5, 28) // 3/18/2024, 5:28:00 AM
let myCreatedDate = new Date("06-20-2024")
// console.log(myCreatedDate.toLocaleString()); 

let myTimeStamp = Date.now()

// Compare time in milliseconds
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
 
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate.getDay())
// console.log(newDate.getMonth())

console.log(newDate.toLocaleString("default", {
    weekday: "long",
}))
/*
    toLocaleString() provides a lot of options to customise 
    the format date and time to be printed.
*/