// 17. Write a program which tells the number of days in a month.


const inputMonth = prompt("Enter the month to find the number of days in it");

function getDaysInMonth (month, year) { 
    return new Date(year, month, 0).getDate();
  }
