// 12. Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
let for1= new Date();
console.log(for1)



//     - DD-MM-YYYY HH:mm

let format= new Date();
console.log(format.toDateString());

//     - DD/MM/YYYY HH:mm


const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1; // adding 1 as getMonth() returns zero-based number
const date = today.getDate();
const hours = today.getHours();
const minutes = today.getMinutes();

const for2=`${date}/${month}/${year}  ${hours}:${minutes}`;
console.log(for2)