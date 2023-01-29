// 15. Write a program which can give grades to students according to theirs scores:
//     - 80-100, A
//     - 70-89, B
//     - 60-69, C
//     - 50-59, D
//     - 0-49, F

let marks=prompt('enter your marks here');
if(marks>=0 &marks<=49){
    alert('WORK HARD ,You have gotten grade F !');
}
else if (marks>=50 & marks<=59){
  alert('You got grade D');
}
else if(marks>=60 & marks<=69){
    alert('You got grade C');
}
else if (marks>=70 & marks<=79){
    alert('You got grade B');
}
else if (marks>=80 &marks<=100){
    alert('Congrats You have got grade A');
}
else(
    alert('Please enter valid marks ')
)


